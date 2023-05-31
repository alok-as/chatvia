import axios from "axios";
import { generateServerOrigin } from "../utils";
import { useAuthStore } from "../store/auth";

const request = axios.create({
	baseURL: generateServerOrigin(),
});

request.interceptors.response.use(
	(response) => ({ status: response.status, ...response.data }),
	async (error) => {
		const originalRequest = error.config;

		if (error.response.status === 401) {
			if (error.response?.data?.code === 490) {
				return instance(originalRequest);
			} else {
				batch(() => {
					useAuthStore.setState({ isAuthenticated: false });
				});
				return Promise.reject(error);
			}
		}

		return Promise.reject(error);
	}
);

export default request;
