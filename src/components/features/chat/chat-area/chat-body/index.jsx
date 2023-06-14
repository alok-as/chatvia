import { useEffect, useRef } from "react";

import ChatMessage from "../chat-message";

import classes from "./index.module.scss";

const ChatBody = ({ userId, conversation = [] }) => {
	const lastMessageRef = useRef();

	useEffect(() => {
		lastMessageRef?.current?.scrollIntoView({ behaviour: "smooth" });
	}, [conversation]);

	return (
		<div className={classes["chat-body"]}>
			{conversation.map(({ _id, sender, message, createdAt }) => (
				<>
					<ChatMessage
						key={_id}
						type={userId === sender._id ? "sent" : "received"}
						timestamp={createdAt}
						imageUrl={sender.imageUrl}
						alt={sender.username}
						name={userId === sender._id ? "Me" : sender.username}
						sender={sender}
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
