import { useState, useRef } from "react";

import { Button, Icon } from "../../../../common";
import FormInput from "../../../../form/form-input";

import classes from "./index.module.scss";

const ChatFooter = ({ sendMessage }) => {
	const documentRef = useRef();

	const [message, setMessage] = useState("");

	const onInputChangeHandler = (e) => {
		setMessage(e.target.value);
	};

	const uploadDocumentsHandler = () => {
		documentRef.current.click();
	};

	const onEnterHandler = (event) => {
		if (event.charCode === 13 || event.which === 13) {
			sendMessageHandler();
		}
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
				<FormInput
					value={message}
					placeholder="Enter Message..."
					onChange={onInputChangeHandler}
					onKeyDown={onEnterHandler}
				/>
			</div>
			<div className={classes["chat-footer__options"]}>
				<ul className={classes["chat-footer__list"]}>
					<li className={classes["chat-footer__option"]}>
						<Icon
							name="emoticon"
							className={classes["chat-footer__icon"]}
						/>
					</li>
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