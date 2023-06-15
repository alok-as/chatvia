import { useEffect } from "react";
import { shallow } from "zustand/shallow";

import Chat from "../../../../services/chat";
import User from "../../../../services/user";

import { useAuthStore } from "../../../../store/auth";
import { useChatStore, useConversationStore } from "../../../../store/chat";
import { useLayoutStore } from "../../../../store/layout";

const useChatArea = () => {
	const { socket, roomId, receiver, receiverId, setChatUser, resetChat } =
		useChatStore(
			(state) => ({
				socket: state.socket,
				roomId: state.roomId,
				receiverId: state.receiverId,
				receiver: state.receiver,
				setChatUser: state.setChatUser,
				resetChat: state.resetChat,
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

	const setIsRecipientProfileVisible = useLayoutStore(
		(state) => state.setIsRecipientProfileVisible
	);

	const getChatDataHandler = async (receiverId, roomId) => {
		const [profile, conversation] = await Promise.all([
			User.getProfile(receiverId),
			Chat.getConversation(roomId),
		]);

		setChatUser({ ...receiver, ...profile.data });
		setConversation(conversation.data);
	};

	const openRecipientProfileHandler = () =>
		setIsRecipientProfileVisible(true);

	const sendMessageHandler = (message) =>
		Chat.sendMessage({ chatRoomId: roomId, message });

	useEffect(() => {
		socket.emit("subscribe", roomId, receiverId);
		getChatDataHandler(receiverId, roomId);

		return () => {
			socket.emit("unsubscribe", roomId);
		};
	}, [receiverId, roomId]);

	return {
		conversation,
		onlineUsers,
		profile,
		receiver,
		receiverId,
		sendMessageHandler,
		resetChat,
		openRecipientProfileHandler,
	};
};

export default useChatArea;
