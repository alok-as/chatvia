import { useEffect, useRef } from "react";
import { shallow } from "zustand/shallow";

import { useChatStore, useConversationStore } from "../store/chat";
import { useAuthStore } from "../store/auth";

const useLayout = () => {
	const firstRenderRef = useRef(true);

	const { socket, roomId } = useChatStore(
		(state) => ({
			socket: state.socket,
			roomId: state.roomId,
		}),
		shallow
	);

	const { profile, setOnlineUsers } = useAuthStore(
		(state) => ({
			profile: state.profile,
			setOnlineUsers: state.setOnlineUsers,
		}),
		shallow
	);

	const addMessageToConversation = useConversationStore(
		(state) => state.addMessageToConversation
	);

	const onSocketConnectHandler = () => {
		socket.emit("identity", profile.id);

		socket.on("users status", (onlineUsers) => {
			setOnlineUsers(onlineUsers);
		});

		socket.on("new message", (message) => {
			addMessageToConversation(message);
		});
	};

	useEffect(() => {
		if (!firstRenderRef.current) return;

		socket.auth = { id: profile.id };
		socket.connect();
		socket.on("connect", onSocketConnectHandler);

		firstRenderRef.current = false;
	}, []);

	return { roomId };
};

export default useLayout;
