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

const recentStore = (set) => ({
	recentChats: [],
	refetchRecentChats: true,
	setRecentChats: (recentChats) =>
		set({ recentChats, refetchRecentChats: false }),
	updateRecentChats: (message) =>
		set((state) => {
			const chatIndex = state.recentChats.findIndex(
				(chat) => chat.chatRoomId === message.chatRoomId
			);

			if (chatIndex === -1) {
				return { refetchRecentChats: true };
			}

			const updatedChats = [...state.recentChats];
			updatedChats[chatIndex].message = message.message;
			updatedChats[chatIndex].sentAt = message.createdAt;

			return { recentChats: updatedChats };
		}),
});

export const useRecentStore = create(
	devtools(recentStore, { name: "recents", store: "recents" })
);
