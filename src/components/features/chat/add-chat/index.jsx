import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { Heading, Icon, Backdrop } from "../../../common";
import Portal from "../../portal";
import AddChatList from "../add-chat-list";

import Contact from "../../../../services/contact";
import { useOutsideClick } from "../../../../hooks";

import classes from "./index.module.scss";

const AddChat = ({ onClose }) => {
	const { ref } = useOutsideClick(onClose);
	const [registeredContacts, setRegisteredContacts] = useState([]);
	const [nonRegisteredContacts, setNonRegisteredContacts] = useState([]);

	const getChatContacts = async () => {
		try {
			const { data } = await Contact.chats();
			const registered = data.find((contacts) => contacts.isRegistered);
			const nonRegistered = data.find(
				(contacts) => !contacts.isRegistered
			);

			setRegisteredContacts(registered.contacts);
			setNonRegisteredContacts(nonRegistered.contacts);
		} catch (error) {
			const message =
				error?.response?.data?.message ||
				"Error fetching chat contacts";
			toast.error(message);
		}
	};

	useEffect(() => {
		getChatContacts();
	}, []);

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
