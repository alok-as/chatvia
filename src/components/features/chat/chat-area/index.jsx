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

	const onlineUsers = useAuthStore((state) => state.onlineUsers);

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

	console.log("receiver", receiver);

	return (
		<div className={classes["chat"]}>
			<ChatHeader
				user={receiver}
				status={
					isUserOnline(onlineUsers, receiverId) ? "online" : "offline"
				}
			/>
			<ChatBody
				currentUserId={profile.id}
				conversation={conversation}
				receiverName={receiver?.name}
			/>
			<ChatFooter sendMessage={sendMessageHandler} />
		</div>
	);
};

export default ChatArea;
