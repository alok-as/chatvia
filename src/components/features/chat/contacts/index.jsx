import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import AddContact from "./add-contact";
import { Heading, ContactGroup, Search, Icon } from "../../../common";

import classes from "./index.module.scss";
import Contact from "../../../../services/contact";

const getContactsMap = (data) => {
	const contactsMap = {};

	data.forEach((contact) => {
		const { initial, contacts } = contact;
		contactsMap[initial] = contacts;
	});

	return contactsMap;
};

const Contacts = () => {
	const [contacts, setContacts] = useState({});
	const [searchInput, setSearchInput] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);

	const onInputChangeHandler = (e) => {
		setSearchInput(e.target.value);
	};

	const onResetInputHandler = () => {
		setSearchInput("");
	};

	const onOpenModalHandler = () => {
		setIsModalOpen(true);
	};

	const onCloseModalHandler = () => {
		setIsModalOpen(false);
	};

	const getUserContactsHandler = async () => {
		try {
			const { data } = await Contact.get();
			const contacts = getContactsMap(data);
			setContacts(contacts);
		} catch (error) {
			console.log("Error fetching contacts!", error.message);
			toast.error("Error fetching contacts!");
		}
	};

	useEffect(() => {
		getUserContactsHandler();
	}, []);

	return (
		<div className={classes["contacts"]}>
			<div className={classes["contacts__header"]}>
				<Heading type="h1">Contacts</Heading>
				<Icon
					name="add-user"
					className={classes["contacts__icon"]}
					onClick={onOpenModalHandler}
				/>
			</div>

			<Search
				type="search"
				className="margin-bottom-small"
				value={searchInput}
				placeholder="Search contacts..."
				onChange={onInputChangeHandler}
				onReset={onResetInputHandler}
			/>

			<div className={classes["contacts__list"]}>
				{Object.entries(contacts).map(([initial, list]) => (
					<ContactGroup
						key={initial}
						initial={initial}
						contacts={list}
					/>
				))}
			</div>

			{isModalOpen && (
				<AddContact
					onClose={onCloseModalHandler}
					onSuccess={getUserContactsHandler}
				/>
			)}
		</div>
	);
};

export default Contacts;
