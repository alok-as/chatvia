import React from "react";

import { Avatar, Heading, Timestamp } from "../../../../common/index";
import { combineClasses } from "../../../../../utils";

import classes from "./index.module.scss";

const ChatMessage = ({ type, timestamp, children, imageUrl, alt, name }) => {
	const attachClassHandler = () => {
		const messageClasses = [
			classes["chat-message"],
			classes[`chat-message--${type}`],
		];

		return combineClasses(messageClasses);
	};

	return (
		<div className={attachClassHandler()}>
			<div className={classes["chat-message__sender"]}>
				<Avatar
					imgSrc={imageUrl}
					alt={alt}
					className={classes["chat-message__avatar"]}
				/>
			</div>
			<div className={classes["chat-message__wrapper"]}>
				<div className={classes["chat-message__content"]}>
					<p className={classes["chat-message__text"]}>{children}</p>
					<Timestamp className={classes["chat-message__timestamp"]}>
						{timestamp}
					</Timestamp>
				</div>
				<Heading
					type="h3"
					className={classes["chat-message__username"]}
				>
					{name}
				</Heading>
			</div>
		</div>
	);
};

export default ChatMessage;
