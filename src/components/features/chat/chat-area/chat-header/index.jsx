import { Avatar, Icon, Heading } from "../../../../common";

import classes from "./index.module.scss";

const ChatHeader = ({ user }) => {
	return (
		<div className={classes["chat-header"]}>
			<div className={classes["chat-header__details"]}>
				<Avatar
					imgSrc={user.imageUrl}
					className={classes["chat-header__avatar"]}
					status="online"
					alt={user.name}
				/>
				<Heading type="h3">{user.name}</Heading>
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
