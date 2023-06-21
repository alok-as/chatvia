import { useRef, useEffect } from "react";
import ChatMessage from "../chat-message";

import { useInfiniteScroll } from "../../../../../hooks";

const MessageList = ({
	currentUserId,
	conversation = [],
	receiverName,
	pagination,
	fetchNextMessages,
}) => {
	const lastMessageRef = useRef();
	const { elementRef } = useInfiniteScroll(pagination, fetchNextMessages);

	useEffect(() => {
		lastMessageRef?.current?.scrollIntoView({ behaviour: "smooth" });
	}, []);

	return (
		<>
			<div ref={elementRef}></div>

			{conversation.map(({ id, type, sender, message, createdAt }) => (
				<ChatMessage
					key={id}
					isSent={currentUserId === sender._id}
					type={type}
					timestamp={createdAt}
					imageUrl={sender.imageUrl}
					alt={receiverName ?? sender.username}
					name={
						currentUserId === sender._id
							? "Me"
							: receiverName ?? sender.username
					}
					message={message}
				/>
			))}

			<div ref={lastMessageRef}></div>
		</>
	);
};

export default MessageList;
