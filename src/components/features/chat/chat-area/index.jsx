import ChatHeader from "./chat-header";
import ChatBody from "./chat-body";
import ChatFooter from "./chat-footer";

import classes from "./index.module.scss";
import useChatArea from "./use-chat-area";
import { isUserOnline } from "../../../../utils";

const ChatArea = () => {
	const {
		conversation,
		onlineUsers,
		profile,
		receiver,
		receiverId,
		resetChat,
		sendMessageHandler,
		openRecipientProfileHandler,
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
				currentUserId={profile.id}
				conversation={conversation}
				receiverName={receiver?.name}
			/>
			<ChatFooter sendMessage={sendMessageHandler} />
		</div>
	);
};

export default ChatArea;
