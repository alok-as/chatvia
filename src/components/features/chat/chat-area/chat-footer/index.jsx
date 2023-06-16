import { useState, useRef, useEffect } from "react";
import { shallow } from "zustand/shallow";
import InputEmoji from "react-input-emoji";

import { useChatStore } from "../../../../../store/chat";
import { useAuthStore } from "../../../../../store/auth";
import { Button, Icon } from "../../../../common";

import classes from "./index.module.scss";
import "./react-emoji.scss";

const ChatFooter = ({ sendMessage }) => {
	const timerRef = useRef();
	const emojiRef = useRef();
	const documentRef = useRef();

	const profile = useAuthStore((state) => state.profile);
	const { socket, roomId, receiver } = useChatStore(
		(state) => ({
			socket: state.socket,
			roomId: state.roomId,
			receiver: state.receiver,
		}),
		shallow
	);

	const [message, setMessage] = useState("");

	const uploadDocumentsHandler = () => {
		documentRef.current.click();
	};

	const onInputChangeHandler = (message) => {
		setMessage(message);
	};

	const sendMessageHandler = async () => {
		try {
			await sendMessage(message);
			setMessage("");
		} catch (error) {
			console.log("Error sending message");
		}
	};

	const onTypingHandler = () => {
		socket.emit("typing", {
			chatRoomId: roomId,
			senderId: profile.id,
		});
	};

	const onDoneTypingHandler = () => {
		if (timerRef.current) clearTimeout(timerRef.current);

		timerRef.current = setTimeout(() => {
			socket.emit("done typing", {
				chatRoomId: roomId,
				senderId: profile.id,
			});
		}, 500);
	};

	const onStartAndDoneTypingHandler = () => {
		onTypingHandler();
		onDoneTypingHandler();
	};

	useEffect(() => {
		const inputArea = emojiRef?.current?.querySelector(
			".react-input-emoji--input"
		);

		inputArea &&
			inputArea.addEventListener("input", onStartAndDoneTypingHandler);

		return () => {
			inputArea &&
				inputArea.removeEventListener(
					"input",
					onStartAndDoneTypingHandler
				);
		};
	}, []);

	return (
		<div className={classes["chat-footer"]}>
			<div ref={emojiRef} className={classes["chat-footer__input"]}>
				<InputEmoji
					value={message}
					onChange={onInputChangeHandler}
					onEnter={sendMessageHandler}
					placeholder="Type a message..."
					cleanOnEnter
					borderRadius={0}
				/>
			</div>
			<div className={classes["chat-footer__options"]}>
				<ul className={classes["chat-footer__list"]}>
					<li
						className={classes["chat-footer__option"]}
						onClick={uploadDocumentsHandler}
					>
						<Icon
							name="attachment"
							className={classes["chat-footer__icon"]}
						/>
						<input
							ref={documentRef}
							type="file"
							accept=".gif,.doc,.pdf,.xlsx,.txt"
							className={classes["chat-footer__file"]}
						/>
					</li>

					<li className={classes["chat-footer__option"]}>
						<Button icon="send" onClick={sendMessageHandler} />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ChatFooter;
