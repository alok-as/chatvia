import { io } from "socket.io-client";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { generateServerOrigin } from "../utils";

const socket = io(generateServerOrigin(), {
	autoConnect: false,
	path: "/connection/",
});

const chatStore = (set) => ({
	socket,
	roomId: null,
	receiverId: null,
	receiver: null,
	setRoomId: (roomId) => set({ roomId }),
	setReceiverId: (receiverId) => set({ receiverId }),
	setChatUser: (receiver) => set({ receiver }),
	resetChat: () =>
		set({
			roomId: null,
			receiverId: null,
			receiver: null,
		}),
});

export const useChatStore = create(
	devtools(chatStore, { name: "chat", store: "chat" })
);

const conversationStore = (set) => ({
	conversation: [],
	setConversation: (conversation) => set({ conversation }),
	addMessageToConversation: (message) =>
		set((state) => ({ conversation: [...state.conversation, message] })),
});

export const useConversationStore = create(
	devtools(conversationStore, { name: "conversation", store: "conversation" })
);
