import { io } from "socket.io-client";
import { create } from "zustand";

import { generateServerOrigin } from "../../../utils";

const socket = io(generateServerOrigin(), {
	autoConnect: false,
	path: "/connection/",
});

export const useChatStore = create((set) => ({
	socket,
}));
