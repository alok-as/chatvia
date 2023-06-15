import { useState, useRef } from "react";

import { Button, Icon } from "../../../../common";
import InputEmoji from "react-input-emoji";

import classes from "./index.module.scss";
import "./react-emoji.scss";

const ChatFooter = ({ sendMessage }) => {
	const documentRef = useRef();
	const [message, setMessage] = useState("");

	const uploadDocumentsHandler = () => {
		documentRef.current.click();
	};

	const sendMessageHandler = async () => {
		try {
			await sendMessage(message);
			setMessage("");
		} catch (error) {
			console.log("Error sending message");
		}
	};

	return (
		<div className={classes["chat-footer"]}>
			<div className={classes["chat-footer__input"]}>
				<InputEmoji
					value={message}
					onChange={setMessage}
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
