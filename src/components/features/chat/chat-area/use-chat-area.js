import { useEffect } from "react";
import { shallow } from "zustand/shallow";

import Chat from "../../../../services/chat";
import User from "../../../../services/user";

import { useAuthStore } from "../../store/auth";
import { useChatStore, useConversationStore } from "../../store/chat";

const useChatArea = () => {
	const { socket, roomId, receiver, receiverId, setChatUser } = useChatStore(
		(state) => ({
			socket: state.socket,
			roomId: state.roomId,
			receiverId: state.receiverId,
			receiver: state.receiver,
			setChatUser: state.setChatUser,
		}),
		shallow
	);

	const { onlineUsers, profile } = useAuthStore(
		(state) => ({
			onlineUsers: state.onlineUsers,
			profile: state.profile,
		}),
		shallow
	);

	const { conversation, setConversation } = useConversationStore(
		(state) => ({
			conversation: state.conversation,
			setConversation: state.setConversation,
		}),
		shallow
	);

	const getChatDataHandler = async (receiverId, roomId) => {
		const [profile, conversation] = await Promise.all([
			User.getProfile(receiverId),
			Chat.getConversation(roomId),
		]);

		setChatUser({ ...receiver, ...profile.data });
		setConversation(conversation.data);
	};

	const sendMessageHandler = (message) =>
		Chat.sendMessage({ chatRoomId: roomId, message });

	const isUserOnline = (onlineUsers, receiverId) => {
		if (!onlineUsers) return false;
		return Object.values(onlineUsers).includes(receiverId);
	};

	useEffect(() => {
		socket.emit("subscribe", roomId, receiverId);
		getChatDataHandler(receiverId, roomId);

		return () => {
			socket.emit("unsubscribe", roomId);
		};
	}, [receiverId, roomId]);

	return {
		conversation,
		isUserOnline,
		onlineUsers,
		profile,
		receiver,
		receiverId,
		sendMessageHandler,
	};
};

export default useChatArea;
