import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { getUserSelectedTheme } from "../utils";

const mql = window.matchMedia("(prefers-color-scheme: dark)");
const preferredTheme = mql.matches ? "dark" : "light";
const selectedTheme = getUserSelectedTheme();
const defaultTheme = selectedTheme ?? preferredTheme;

const store = (set) => ({
	theme: defaultTheme,
	setTheme: (theme) => set({ theme }),
});

export const useThemeStore = create(
	devtools(store, { name: "theme", store: "theme" })
);
