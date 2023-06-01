import { create } from "zustand";
import { getAuthTokens } from "../../../../utils";

const { accessToken, refreshToken } = getAuthTokens();
const isAuthenticatedCache = accessToken ?? refreshToken;

export const useAuthStore = create((set) => ({
	isAuthenticated: isAuthenticatedCache ? true : false,
	setIsAuthenticated: (value) => set({ isAuthenticated: value }),
}));
