import { useEffect } from "react";

import { useChatStore } from "../../store/chat";
import { useAuthStore } from "../../store/auth";

import classes from "./index.module.scss";

const Chat = () => {
	const socket = useChatStore((state) => state.socket);
	const profile = useAuthStore((state) => state.profile);

	useEffect(() => {
		socket.auth = { username: profile.username };
		socket.connect();
	}, []);

	return <div className={classes["chat"]}></div>;
};

export default Chat;
