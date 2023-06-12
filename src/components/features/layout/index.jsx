import { useEffect } from "react";

import Sidebar from "../../features/sidebar";
import { ChatArea } from "../../features/chat";

import { useChatStore } from "../store/chat";
import { useAuthStore } from "../store/auth";

import classes from "./index.module.scss";

const Layout = () => {
	const socket = useChatStore((state) => state.socket);
	const roomId = useChatStore((state) => state.roomId);
	const profile = useAuthStore((state) => state.profile);

	useEffect(() => {
		socket.auth = { id: profile.id };
		socket.connect();

		socket.on("connect", () => {
			socket.emit("identity", profile.id);
		});
	}, []);

	return (
		<div className={classes["layout"]}>
			<Sidebar />
			{roomId && <ChatArea />}
		</div>
	);
};

export default Layout;
