import { useEffect, useRef } from "react";

import ChatMessage from "../chat-message";
import classes from "./index.module.scss";

const ChatBody = ({ currentUserId, conversation = [], receiverName }) => {
	const lastMessageRef = useRef();

	useEffect(() => {
		lastMessageRef?.current?.scrollIntoView({ behaviour: "smooth" });
	}, [conversation]);

	return (
		<div className={classes["chat-body"]}>
			{conversation.map(({ id, sender, message, createdAt }) => (
				<>
					<ChatMessage
						key={id}
						type={
							currentUserId === sender._id ? "sent" : "received"
						}
						timestamp={createdAt}
						imageUrl={sender.imageUrl}
						alt={receiverName ?? sender.username}
						name={
							currentUserId === sender._id
								? "Me"
								: receiverName ?? sender.username
						}
					>
						{message}
					</ChatMessage>
					<div ref={lastMessageRef}></div>
				</>
			))}
		</div>
	);
};

export default ChatBody;
