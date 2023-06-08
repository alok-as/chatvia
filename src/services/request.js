import axios from "axios";
import {
	generateServerOrigin,
	storeAuthTokens,
	getKeyFromLocalStorage,
	removeAuthTokens,
} from "../utils";
import { useAuthStore } from "../components/features/store/auth";

const baseURL = generateServerOrigin();

const request = axios.create({
	baseURL: `${baseURL}/api`,
});

request.interceptors.request.use(
	(config) => {
		const accessToken = getKeyFromLocalStorage("accessToken");
		const refreshToken = getKeyFromLocalStorage("refreshToken");

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
				const { accessToken, refreshToken } = error.response.data;
				storeAuthTokens(accessToken, refreshToken);
				return instance(originalRequest);
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
