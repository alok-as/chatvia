import { useState, useRef } from "react";

import { Button, Icon } from "../../../../common";
import FormInput from "../../../../form/form-input";

import classes from "./index.module.scss";

const ChatFooter = () => {
	const documentRef = useRef();

	const [message, setMessage] = useState("");

	const onInputChangeHandler = (e) => {
		setMessage(e.target.value);
	};

	const uploadDocumentsHandler = () => {
		documentRef.current.click();
	};

	return (
		<div className={classes["chat-footer"]}>
			<form className={classes["chat-footer__input"]}>
				<FormInput
					value={message}
					placeholder="Enter Message..."
					onChange={onInputChangeHandler}
				/>
			</form>
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
						<Button icon="send" />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ChatFooter;
