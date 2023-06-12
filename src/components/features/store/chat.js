import { io } from "socket.io-client";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { generateServerOrigin } from "../../../utils";

const socket = io(generateServerOrigin(), {
	autoConnect: false,
	path: "/connection/",
});

socket.onAny((event, ...args) => {
	console.log("Event notifier", event, ...args);
});

const chatStore = (set) => ({
	socket,
	roomId: null,
	receiverId: null,
	receiver: null,
	setRoomId: (roomId) => set({ roomId }),
	setReceiverId: (receiverId) => set({ receiverId }),
	setChatUser: (receiver) => set({ receiver }),
});

export const useChatStore = create(
	devtools(chatStore, { name: "chat", store: "chat" })
);

const conversationStore = (set) => ({
	conversation: [],
	setConversation: (conversation) => set({ conversation }),
});

export const useConversationStore = create(
	devtools(conversationStore, { name: "conversation", store: "conversation" })
);
