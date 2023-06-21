import React, { forwardRef } from "react";

import { Avatar, Heading, Timestamp } from "../../../../common/index";
import { combineClasses } from "../../../../../utils";

import classes from "./index.module.scss";

const ChatMessage = forwardRef(
	({ isSent, type, timestamp, message, imageUrl, alt, name }, ref) => {
		const attachClassHandler = () => {
			const messageClasses = [
				classes["chat-message"],
				classes[`chat-message--${isSent ? "sent" : "received"}`],
			];

			return combineClasses(messageClasses);
		};

		return (
			<div className={attachClassHandler()} ref={ref}>
				<div className={classes["chat-message__sender"]}>
					<Avatar
						imgSrc={imageUrl}
						alt={alt}
						className={classes["chat-message__avatar"]}
					/>
				</div>
				<div className={classes["chat-message__wrapper"]}>
					<div className={classes["chat-message__content"]}>
						{type === "text" ? (
							<p className={classes["chat-message__text"]}>
								{message}
							</p>
						) : (
							<img
								className={classes["chat-message__image"]}
								src={message}
							/>
						)}

						<Timestamp
							className={classes["chat-message__timestamp"]}
							isFullForm={true}
						>
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
	}
);

export default ChatMessage;
