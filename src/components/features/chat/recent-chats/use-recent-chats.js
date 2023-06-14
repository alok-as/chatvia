import { useEffect, useRef, useState } from "react";

import Chat from "../../../../services/chat";
import Contact from "../../../../services/contact";
import { useAuthStore } from "../../store/auth";
import { useChatStore } from "../../store/chat";

const searchParams = ["name", "message"];

const useRecentChats = () => {
	const ref = useRef();
	const profile = useAuthStore((state) => state.profile);

	const socket = useChatStore((state) => state.socket);
	const roomId = useChatStore((state) => state.roomId);
	const onlineUsers = useAuthStore((state) => state.onlineUsers);

	const setRoomId = useChatStore((state) => state.setRoomId);
	const setChatUser = useChatStore((state) => state.setChatUser);
	const setReceiverId = useChatStore((state) => state.setReceiverId);

	const [recentChats, setRecentChats] = useState([]);
	const [registeredContacts, setRegisteredContacts] = useState([]);
	const [nonRegisteredContacts, setNonRegisteredContacts] = useState([]);

	const [searchInput, setSearchInput] = useState("");

	const [isModalOpen, setIsModalOpen] = useState(false);

	const onInputChangeHandler = (e) => {
		setSearchInput(e.target.value);
	};

	const onResetInputHandler = () => {
		setSearchInput("");
		ref.current.focus();
	};

	const filterResults = (items) => {
		return items.filter((item) =>
			searchParams.some((param) =>
				item[param]
					.toString()
					.toLowerCase()
					.includes(searchInput.toLowerCase())
			)
		);
	};

	const onOpenModalHandler = () => {
		setIsModalOpen(true);
	};

	const onCloseModalHandler = () => {
		setIsModalOpen(false);
	};

	const filterChatContacts = (list) => {
		const registered = list.find((contacts) => contacts.isRegistered);
		const nonRegistered = list.find((contacts) => !contacts.isRegistered);

		return {
			registered: registered?.contacts ?? [],
			nonRegistered: nonRegistered?.contacts ?? [],
		};
	};

	const transformRecentChats = (chatData, contacts) => {
		const recentChats = chatData.map((chat) => {
			const sentTo = chat.recipients
				.flat()
				.find((user) => user._id !== profile.id);

			const contact = contacts.find(
				(contact) => contact.contactId === sentTo._id
			);

			// Re Think Later
			socket.emit("subscribe", chat.chatRoomId);

			return {
				chatRoomId: chat.chatRoomId,
				type: chat.type,
				message: chat.message,
				sentAt: chat.createdAt,
				imageUrl: sentTo.imageUrl,
				name: contact?.name ?? sentTo.username,
				userId: sentTo._id,
			};
		});

		return recentChats;
	};

	const getChatDataHandler = async () => {
		const [chatContacts, recentChats] = await Promise.all([
			Contact.chats(),
			Chat.recents(),
		]);

		const { registered, nonRegistered } = filterChatContacts(
			chatContacts.data
		);

		const transformedChats = transformRecentChats(recentChats.data, [
			...registered,
			...nonRegistered,
		]);

		setRecentChats(transformedChats);
		setRegisteredContacts(registered);
		setNonRegisteredContacts(nonRegistered);
	};

	const initiateChatHandler = (chatRoomId, userId, name) => {
		setRoomId(chatRoomId);
		setReceiverId(userId);
		setChatUser({ name });
	};

	const updateUsersStatusHandler = () => {
		const onlineUsersId = Object.values(onlineUsers);

		const updatedChats = recentChats.map((chat) => ({
			...chat,
			isOnline: onlineUsersId.includes(chat.userId) ? true : false,
		}));

		setRecentChats(updatedChats);
	};

	useEffect(() => {
		getChatDataHandler();
	}, []);

	useEffect(() => {
		if (onlineUsers) {
			updateUsersStatusHandler();
		}
	}, [onlineUsers]);

	return {
		ref,
		registeredContacts,
		nonRegisteredContacts,
		recentChats,
		activeRoomId: roomId,
		searchInput,
		isModalOpen,
		initiateChatHandler,
		onResetInputHandler,
		onInputChangeHandler,
		onOpenModalHandler,
		onCloseModalHandler,
		filterResults,
	};
};

export default useRecentChats;
