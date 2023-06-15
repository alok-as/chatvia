import { useEffect, useRef } from "react";
import { shallow } from "zustand/shallow";

import { useAuthStore } from "../../../store/auth";
import { useChatStore, useConversationStore } from "../../../store/chat";
import { useLayoutStore } from "../../../store/layout";
import { useThemeStore } from "../../../store/theme";

import { setKeyInLocalStorage } from "../../../utils";

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

	const isRecipientProfileVisible = useLayoutStore(
		(state) => state.isRecipientProfileVisible
	);

	const { theme, setTheme } = useThemeStore(
		(state) => ({
			theme: state.theme,
			setTheme: state.setTheme,
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

	useEffect(() => {
		const mql = window.matchMedia("(prefers-color-scheme: dark)");

		const onChangeThemeHandler = (e) => {
			if (e.matches) {
				setTheme("dark");
				setKeyInLocalStorage("theme", "dark");
			} else {
				setTheme("light");
				setKeyInLocalStorage("theme", "light");
			}
		};

		mql.addEventListener("change", onChangeThemeHandler);

		return () => {
			mql.removeEventListener("change", onChangeThemeHandler);
		};
	}, []);

	useEffect(() => {
		document.documentElement.setAttribute("class", `theme-${theme}`);
	}, [theme]);

	return { roomId, isRecipientProfileVisible };
};

export default useLayout;
