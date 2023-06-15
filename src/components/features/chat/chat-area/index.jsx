import ChatHeader from "./chat-header";
import ChatBody from "./chat-body";
import ChatFooter from "./chat-footer";

import classes from "./index.module.scss";
import useChatArea from "./use-chat-area";

const ChatArea = () => {
	const {
		conversation,
		isUserOnline,
		onlineUsers,
		profile,
		receiver,
		receiverId,
		sendMessageHandler,
	} = useChatArea();

	return (
		<div className={classes["chat"]}>
			<ChatHeader
				user={receiver}
				status={
					isUserOnline(onlineUsers, receiverId) ? "online" : "offline"
				}
			/>
			<ChatBody
				currentUserId={profile.id}
				conversation={conversation}
				receiverName={receiver?.name}
			/>
			<ChatFooter sendMessage={sendMessageHandler} />
		</div>
	);
};

export default ChatArea;
