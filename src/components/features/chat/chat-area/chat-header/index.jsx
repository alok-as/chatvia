import React from "react";

import classes from "./index.module.scss";
import { Avatar, Icon, Heading } from "../../../../common";

const ChatHeader = () => {
	return (
		<div className={classes["chat-header"]}>
			<div className={classes["chat-header__details"]}>
				<Avatar
					imgSrc=""
					className={classes["chat-header__avatar"]}
					status="online"
					alt="Nitin Sharma"
				/>
				<Heading type="h3">Nitin Sharma</Heading>
			</div>
			<div className={classes["chat-header__actions"]}>
				<Icon name="search" className={classes["chat-header__icon"]} />
				<Icon name="user" className={classes["chat-header__icon"]} />
				<Icon name="more" className={classes["chat-header__icon"]} />
			</div>
		</div>
	);
};

export default ChatHeader;
