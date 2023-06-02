import { useState } from "react";
import { nanoid } from "nanoid";

import { Heading, ContactGroup, Search, Icon } from "../../../common";

import classes from "./index.module.scss";

const contacts = {
	a: [
		{ id: nanoid(), name: "Alok Sharma", email: "alok.sharma@gmail.com" },
		{ id: nanoid(), name: "Aman Jethwani", email: "alok.sharma@gmail.com" },
	],
	n: [
		{ id: nanoid(), name: "Nitin Sharma", email: "nitin.sharma@gmail.com" },
		{
			id: nanoid(),
			name: "Nikita Gandhi",
			email: "nikita.gandhi@gmail.com",
		},
	],
	s: [
		{
			id: nanoid(),
			name: "Sahej Khurana",
			email: "sahej.khurana@gmail.com",
		},
	],
};

const Contacts = () => {
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
		</div>
	);
};

export default Contacts;
