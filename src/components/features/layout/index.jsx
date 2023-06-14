import { useEffect, useRef } from "react";

import Sidebar from "../../features/sidebar";
import { ChatArea } from "../../features/chat";

import { useChatStore, useConversationStore } from "../store/chat";
import { useAuthStore } from "../store/auth";

import classes from "./index.module.scss";

const Layout = () => {
	const firstRenderRef = useRef(true);

	const socket = useChatStore((state) => state.socket);
	const roomId = useChatStore((state) => state.roomId);
	const profile = useAuthStore((state) => state.profile);
	const setOnlineUsers = useAuthStore((state) => state.setOnlineUsers);

	const addMessageToConversation = useConversationStore(
		(state) => state.addMessageToConversation
	);

	useEffect(() => {
		if (!firstRenderRef.current) return;

		socket.auth = { id: profile.id };
		socket.connect();

		socket.on("connect", () => {
			socket.emit("identity", profile.id);

			socket.on("users status", (onlineUsers) => {
				setOnlineUsers(onlineUsers);
			});

			socket.on("new message", (message) => {
				addMessageToConversation(message);
				console.log("New Message", message);
			});
		});

		firstRenderRef.current = false;
	}, []);

	return (
		<div className={classes["layout"]}>
			<Sidebar />
			{roomId && <ChatArea />}
		</div>
	);
};

export default Layout;
