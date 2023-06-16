import { useEffect, useState } from "react";
import { shallow } from "zustand/shallow";

import { Avatar, Icon, Heading } from "../../../../common";
import { useChatStore } from "../../../../../store/chat";
import classes from "./index.module.scss";

const ChatHeader = ({ user, status, resetChat, openRecipientProfile }) => {
	const [isTyping, setIsTyping] = useState(false);

	const { socket } = useChatStore(
		(state) => ({
			socket: state.socket,
			roomId: state.roomId,
		}),
		shallow
	);

	useEffect(() => {
		socket.on("typing", (senderId) => {
			if (senderId === user._id) {
				setIsTyping(true);
			}
		});

		socket.on("done typing", (senderId) => {
			if (senderId === user._id) {
				setIsTyping(false);
			}
		});

		return () => {
			socket.off("typing");
			socket.off("done typing");
		};
	}, [user]);

	return (
		<div className={classes["chat-header"]}>
			<div className={classes["chat-header__details"]}>
				<Icon
					name="left-arrow"
					className={classes["chat-header__arrow"]}
					onClick={resetChat}
				/>

				<Avatar
					imgSrc={user.imageUrl}
					status={status}
					alt={user.name}
				/>
				<Heading type="h3" className={classes["chat-header__title"]}>
					<span>{user.name}</span>
					{isTyping && <small>typing...</small>}
				</Heading>
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
};
export default ChatHeader;
