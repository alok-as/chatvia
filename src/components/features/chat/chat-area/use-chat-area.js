import { useEffect, useState } from "react";
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

	const { conversation, pagination, setConversation, updateConversation } =
		useConversationStore(
			(state) => ({
				conversation: state.conversation,
				pagination: state.pagination,
				setConversation: state.setConversation,
				updateConversation: state.updateConversation,
			}),
			shallow
		);

	const setIsRecipientProfileVisible = useLayoutStore(
		(state) => state.setIsRecipientProfileVisible
	);

	const fetchNextMessagesHandler = async (page, perPage) => {
		const { data } = await Chat.getConversation(roomId, {
			page,
			perPage,
		});
		updateConversation(data.conversation);
	};

	const getChatDataHandler = async (receiverId, roomId) => {
		const [profileRes, conversationRes] = await Promise.all([
			User.getProfile(receiverId),
			Chat.getConversation(roomId),
		]);

		setChatUser({ ...receiver, ...profileRes.data });
		setConversation(
			conversationRes.data.conversation,
			conversationRes.data.pagination
		);
	};

	const openRecipientProfileHandler = () =>
		setIsRecipientProfileVisible(true);

	const sendMessageHandler = ({ message, type = "text" }) => {
		const formData = new FormData();

		formData.append("chatRoomId", roomId);
		formData.append("message", message);
		formData.append("type", type);

		return Chat.sendMessage(formData);
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
		pagination,
		onlineUsers,
		profile,
		receiver,
		receiverId,
		sendMessageHandler,
		resetChat,
		openRecipientProfileHandler,
		fetchNextMessagesHandler,
	};
};

export default useChatArea;
