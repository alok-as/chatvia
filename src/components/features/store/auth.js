import { create } from "zustand";
import { getUserProfile } from "../../../utils";

const profileCache = getUserProfile();

export const useAuthStore = create((set) => ({
	profile: profileCache ?? null,
	setUserProfile: (value) => set({ profile: value }),
}));
