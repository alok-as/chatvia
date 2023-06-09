import { io } from "socket.io-client";
import { create } from "zustand";

import { generateServerOrigin } from "../../../utils";

const socket = io(generateServerOrigin(), {
	autoConnect: false,
	path: "/connection/",
});

socket.onAny((event, ...args) => {
	console.log("Event notifier", event, ...args);
});

export const useChatStore = create((set) => ({
	socket,
	currentChat: null,
	setCurrentChat: (value) => set({ currentChat: value }),
}));
