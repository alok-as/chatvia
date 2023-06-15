import { Avatar, Heading, Timestamp } from "../../../../common";

import classes from "./index.module.scss";
import { combineClasses } from "../../../../../utils";

const UserCard = ({
	name,
	avatar,
	text,
	timestamp,
	isActive,
	isOnline,
	onClick,
}) => {
	const attachClassHandler = () => {
		const messageClasses = [classes["user-card"]];
		isActive && messageClasses.push(classes["user-card--active"]);
		return combineClasses(messageClasses);
	};

	return (
		<div className={attachClassHandler()} onClick={onClick}>
			<div className={classes["user-card__avatar"]}>
				<Avatar
					imgSrc={avatar}
					status={isOnline ? "online" : "offline"}
				/>
			</div>
			<div className={classes["user-card__content"]}>
				<div className={classes["user-card__title"]}>
					<Heading type="h3">{name}</Heading>
					<p className={classes["user-card__text"]}>{text}</p>
				</div>
				{timestamp && <Timestamp>{timestamp}</Timestamp>}
			</div>
		</div>
	);
};

export default UserCard;
