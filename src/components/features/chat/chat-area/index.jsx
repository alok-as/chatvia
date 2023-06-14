import { useEffect } from "react";

import ChatHeader from "./chat-header";
import ChatBody from "./chat-body";
import ChatFooter from "./chat-footer";

import User from "../../../../services/user";
import Chat from "../../../../services/chat";

import { useChatStore, useConversationStore } from "../../store/chat";

import classes from "./index.module.scss";
import { useAuthStore } from "../../store/auth";

const ChatArea = () => {
	const socket = useChatStore((state) => state.socket);
	const roomId = useChatStore((state) => state.roomId);
	const receiverId = useChatStore((state) => state.receiverId);
	const receiver = useChatStore((state) => state.receiver);
	const setChatUser = useChatStore((state) => state.setChatUser);

	const conversation = useConversationStore((state) => state.conversation);
	const setConversation = useConversationStore(
		(state) => state.setConversation
	);

	const profile = useAuthStore((state) => state.profile);

	const getChatDataHandler = async (receiverId, roomId) => {
		const [profile, conversation] = await Promise.all([
			User.getProfile(receiverId),
			Chat.getConversation(roomId),
		]);

		setChatUser({ ...receiver, ...profile.data });
		setConversation(conversation.data);
	};

	const sendMessageHandler = (message) => {
		return Chat.sendMessage({ chatRoomId: roomId, message });
	};

	useEffect(() => {
		socket.emit("subscribe", roomId, receiverId);
		getChatDataHandler(receiverId, roomId);

		return () => {
			socket.emit("unsubscribe", roomId);
		};
	}, [receiverId, roomId]);

	return (
		<div className={classes["chat"]}>
			<ChatHeader user={receiver} />
			<ChatBody userId={profile.id} conversation={conversation} />
			<ChatFooter sendMessage={sendMessageHandler} />
		</div>
	);
};

export default ChatArea;
