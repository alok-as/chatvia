import { create } from "zustand";
import { getUserProfile } from "../../../utils";
import { devtools } from "zustand/middleware";

const profileCache = getUserProfile();

const store = (set) => ({
	profile: profileCache ?? null,
	setUserProfile: (value) => set({ profile: value }),
});

export const useAuthStore = create(
	devtools(store, { name: "auth", store: "auth" })
);
