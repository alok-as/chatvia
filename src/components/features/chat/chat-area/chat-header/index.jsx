import { Avatar, Icon, Heading } from "../../../../common";
import classes from "./index.module.scss";

const ChatHeader = ({ user, status, resetChat, openRecipientProfile }) => (
	<div className={classes["chat-header"]}>
		<div className={classes["chat-header__details"]}>
			<Icon
				name="left-arrow"
				className={classes["chat-header__arrow"]}
				onClick={resetChat}
			/>

			<Avatar imgSrc={user.imageUrl} status={status} alt={user.name} />
			<Heading type="h3">{user.name}</Heading>
		</div>
		<div className={classes["chat-header__actions"]}>
			<Icon
				name="user"
				className={classes["chat-header__icon"]}
				onClick={openRecipientProfile}
			/>
			<Icon name="more" className={classes["chat-header__icon"]} />
		</div>
	</div>
);
export default ChatHeader;
