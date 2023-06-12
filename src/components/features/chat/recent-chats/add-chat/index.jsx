import { useEffect } from "react";

import { Heading, Icon, Backdrop } from "../../../../common";
import Portal from "../../../portal";
import AddChatList from "../add-chat-list";

import Chat from "../../../../../services/chat";
import { useOutsideClick } from "../../../../../hooks";

import classes from "./index.module.scss";

const AddChat = ({
	onClose,
	initiateChat,
	registeredContacts,
	nonRegisteredContacts,
}) => {
	const { ref } = useOutsideClick(onClose);

	const selectChatUserHandler = async (userId, name) => {
		try {
			const { data } = await Chat.initiate(userId);
			initiateChat(data.roomId, userId, name);
			onClose();
		} catch (error) {
			console.log("Error initiating chat", error);
		}
	};

	return (
		<Portal>
			<Backdrop />
			<div ref={ref} className={classes["add-chat"]}>
				<div className={classes["add-chat__header"]}>
					<Heading type="h2">Add Chat</Heading>
					<Icon name="close" onClick={onClose} />
				</div>
				<div className={classes["add-chat__body"]}>
					<AddChatList
						title="Contacts on Chatvia"
						contacts={registeredContacts}
						onSelect={selectChatUserHandler}
					/>

					<AddChatList
						title="Invite to Chatvia"
						contacts={nonRegisteredContacts}
						invite={true}
					/>
				</div>
			</div>
		</Portal>
	);
};

export default AddChat;
