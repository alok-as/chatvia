import { Avatar, Heading } from "..";

import classes from "./index.module.scss";
import { combineClasses } from "../../../utils";

const ChatCard = ({ name, avatar, onClick, invite }) => {
	const attachClassHandler = () => {
		const chatCardClasses = [classes["chat-card"]];
		return combineClasses(chatCardClasses);
	};

	return (
		<div className={attachClassHandler()} onClick={onClick}>
			<div className={classes["chat-card__avatar"]}>
				<Avatar alt={name} imgSrc={avatar} />
			</div>
			<div className={classes["chat-card__content"]}>
				<Heading type="h3">{name}</Heading>
				{invite && (
					<small className={classes["chat-card__invite"]}>
						Invite
					</small>
				)}
			</div>
		</div>
	);
};

export default ChatCard;
