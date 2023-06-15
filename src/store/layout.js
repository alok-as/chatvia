import { create } from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
	isRecipientProfileVisible: false,
	setIsRecipientProfileVisible: (value) =>
		set({ isRecipientProfileVisible: value }),
});

export const useLayoutStore = create(
	devtools(store, { name: "layout", store: "layout" })
);
