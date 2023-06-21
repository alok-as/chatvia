import ChatHeader from "./chat-header";
import ChatBody from "./chat-body";
import ChatFooter from "./chat-footer";

import classes from "./index.module.scss";
import useChatArea from "./use-chat-area";
import { isUserOnline } from "../../../../utils";

const ChatArea = () => {
	const {
		conversation,
		pagination,
		onlineUsers,
		profile,
		receiver,
		receiverId,
		resetChat,
		sendMessageHandler,
		openRecipientProfileHandler,
		fetchNextMessagesHandler,
	} = useChatArea();

	return (
		<div className={classes["chat"]}>
			<ChatHeader
				user={receiver}
				status={
					isUserOnline(onlineUsers, receiverId) ? "online" : "offline"
				}
				resetChat={resetChat}
				openRecipientProfile={openRecipientProfileHandler}
			/>

			<ChatBody
				conversation={conversation}
				pagination={pagination}
				currentUserId={profile.id}
				receiverName={receiver?.name}
				fetchNextMessages={fetchNextMessagesHandler}
			/>

			<ChatFooter sendMessage={sendMessageHandler} />
		</div>
	);
};

export default ChatArea;
