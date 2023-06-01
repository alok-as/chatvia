import { useRef, useState } from "react";
import { nanoid } from "nanoid";

import { Heading, Search } from "../../../common";
import UserCard from "../user-card";

import classes from "./index.module.scss";

import profilePic1 from "../../../../assets/images/avatar-1.jpg";
import profilePic2 from "../../../../assets/images/avatar-2.jpg";

const recentChats = [
	{
		id: nanoid(),
		name: "Patrick Hendris",
		avatar: profilePic1,
		text: "okay Sure",
		timestamp: new Date(),
		isOnline: true,
	},
	{
		id: nanoid(),
		name: "Mark Messer",
		avatar: profilePic2,
		text: "Next Meeting tommorrow",
		timestamp: new Date(),
		isOnline: false,
	},
];

const searchParams = ["name", "text"];

const Recent = () => {
	const searchRef = useRef();
	const [searchInput, setSearchInput] = useState("");
	const [activeChatId, setActiveChatId] = useState(recentChats[0].id);

	const onInputChangeHandler = (e) => {
		setSearchInput(e.target.value);
	};

	const onResetInputHandler = () => {
		setSearchInput("");
		searchRef.current.focus();
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

	return (
		<div className={classes["recent-chats"]}>
			<Heading type="h1" className={classes["recent-chats__heading"]}>
				Chats
			</Heading>

			<Search
				ref={searchRef}
				type="search"
				value={searchInput}
				placeholder="Search messages or users"
				onReset={onResetInputHandler}
				onChange={onInputChangeHandler}
			/>

			<Heading type="h2" className={classes["recent-chats__subheading"]}>
				Recent
			</Heading>

			<div className={classes.recent__messages}>
				{filterResults(recentChats).map(
					({ id, name, avatar, text, isOnline, timestamp }) => (
						<UserCard
							key={id}
							name={name}
							avatar={avatar}
							text={text}
							timestamp={timestamp}
							isActive={id === activeChatId}
							isOnline={isOnline}
							onClick={() => setActiveChatId(id)}
						/>
					)
				)}
			</div>
		</div>
	);
};

export default Recent;