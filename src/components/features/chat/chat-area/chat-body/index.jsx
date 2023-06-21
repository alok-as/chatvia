import MessageList from "../message-list";
import classes from "./index.module.scss";

const ChatBody = ({
	currentUserId,
	conversation,
	pagination,
	receiverName,
	fetchNextMessages,
}) => (
	<div className={classes["chat-body"]}>
		{conversation.length !== 0 && (
			<MessageList
				currentUserId={currentUserId}
				conversation={conversation}
				pagination={pagination}
				receiverName={receiverName}
				fetchNextMessages={fetchNextMessages}
			/>
		)}
	</div>
);

export default ChatBody;
