import ChatHeader from "./chat-header";
import ChatBody from "./chat-body";
import ChatFooter from "./chat-footer";

import classes from "./index.module.scss";

const Chat = () => {
	return (
		<div className={classes["chat"]}>
			<ChatHeader />
			<ChatBody />
			<ChatFooter />
		</div>
	);
};

export default Chat;
