import { Message } from "../../../../common";
import classes from "./index.module.scss";

const ChatBody = ({ conversation = [] }) => {
	return (
		<div className={classes["chat-body"]}>
			{conversation.map((message) => (
				<Message
					key={message._id}
					type={message.type}
					timestamp={message.createdAt}
				>
					{message.message}
				</Message>
			))}
		</div>
	);
};

export default ChatBody;
