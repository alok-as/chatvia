import { Avatar, Heading, Timestamp } from "../../../../common";

import classes from "./index.module.scss";
import { combineClasses } from "../../../../../utils";

const UserCard = ({
	status,
	name,
	avatar,
	text,
	timestamp,
	isActive,
	isOnline,
	onClick,
}) => {
	const attachClassHandler = () => {
		const messageClasses = [classes["message"]];
		isActive && messageClasses.push(classes["message--active"]);
		return combineClasses(messageClasses);
	};

	return (
		<div className={attachClassHandler()} onClick={onClick}>
			<div className={classes["message__avatar"]}>
				<Avatar
					imgSrc={avatar}
					status={isOnline ? "online" : "offline"}
				/>
			</div>
			<div className={classes["message__content"]}>
				<div>
					<Heading type="h3">{name}</Heading>
					<p className={classes["message__text"]}>{text}</p>
				</div>
				{timestamp && <Timestamp>{timestamp}</Timestamp>}
			</div>
		</div>
	);
};

export default UserCard;
