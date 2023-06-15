import axios from "axios";
import {
	generateServerOrigin,
	getAuthTokens,
	storeAuthTokens,
	removeAuthTokens,
} from "../utils";
import { useAuthStore } from "../store/auth";

const baseURL = generateServerOrigin();

const request = axios.create({
	baseURL: `${baseURL}/api`,
});

request.interceptors.request.use(
	(config) => {
		const { accessToken, refreshToken } = getAuthTokens();

		if (accessToken) {
			config.headers["Authorization"] = `Bearer ${accessToken}`;
		}

		if (refreshToken) {
			config.headers["Refresh-Token"] = refreshToken;
		}

		return config;
	},
	(error) => {
		Promise.reject(error);
	}
);

request.interceptors.response.use(
	(response) => ({ status: response.status, ...response.data }),
	async (error) => {
		const originalRequest = error.config;

		if (error.response.status === 401) {
			if (error.response?.data?.code === 490) {
				const { accessToken, refreshToken } = error.response.data.data;
				storeAuthTokens(accessToken, refreshToken);
				return request(originalRequest);
			} else {
				removeAuthTokens();
				useAuthStore.setState({ profile: null });
				return Promise.reject(error);
			}
		}

		return Promise.reject(error);
	}
);

export default request;
