import { useEffect } from "react";

import Sidebar from "../../features/sidebar";
import { ChatArea } from "../../features/chat";

import { useChatStore } from "../store/chat";
import { useAuthStore } from "../store/auth";

import classes from "./index.module.scss";

const Layout = () => {
	const socket = useChatStore((state) => state.socket);
	const profile = useAuthStore((state) => state.profile);

	useEffect(() => {
		socket.auth = { username: profile.username };
		socket.connect();

		socket.on("connect", () => {
			socket.emit("identity", profile.username);
		});
	}, []);

	return (
		<div className={classes["layout"]}>
			<Sidebar />
			<ChatArea />
		</div>
	);
};

export default Layout;
