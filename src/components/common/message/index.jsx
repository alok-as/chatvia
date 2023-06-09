import React from "react";

import { Avatar, Heading, Timestamp } from "../index";
import { combineClasses } from "../../../utils";

import classes from "./index.module.scss";

const Message = ({ type, timestamp, children }) => {
	const attachClassHandler = () => {
		const messageClasses = [classes["message"]];

		if (type.includes("sent")) {
			messageClasses.push(classes["message--sent"]);
		} else {
			messageClasses.push(classes["message--received"]);
		}

		return combineClasses(messageClasses);
	};

	return (
		<div className={attachClassHandler()}>
			<div className={classes["message__sender"]}>
				<Avatar className={classes["message__avatar"]} />
			</div>
			<div className={classes.message__wrapper}>
				<div className={classes["message__content"]}>
					<p className={classes["message__text"]}>{children}</p>
					<Timestamp className={classes["message__timestamp"]}>
						{timestamp}
					</Timestamp>
				</div>
				<Heading type="h3" className={classes["message__username"]}>
					Alok Sharma
				</Heading>
			</div>
		</div>
	);
};

export default Message;
