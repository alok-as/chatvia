import { useState } from "react";
import { nanoid } from "nanoid";

import { Heading, Icon, Button, Backdrop } from "../../../common";
import { Form } from "../../../form";
import Portal from "../../portal";

import classes from "./index.module.scss";
import { useOutsideClick } from "../../../../hooks";

const fields = [
	{
		id: nanoid(),
		type: "email",
		name: "email",
		label: "Email",
		placeholder: "Enter Email",
		disabled: false,
	},
	{
		id: nanoid(),
		type: "textarea",
		name: "message",
		label: "Invitation Message",
		placeholder: "Enter Message",
		disabled: false,
	},
];

const AddContact = ({ onClose }) => {
	const { ref } = useOutsideClick(onClose);

	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const onInputChangeHandler = (e) => {
		const field = e.target.name;
		const value = e.target.value;

		if (field.includes("email")) {
			setEmail(value);
		} else {
			setMessage(value);
		}
	};

	const onSendInviteHandler = (data) => {
		console.log("submitting", data);
	};

	return (
		<Portal>
			<Backdrop />
			<div ref={ref} className={classes["add-contact"]}>
				<div className={classes["add-contact__header"]}>
					<Heading type="h2">Add Contacts</Heading>
					<Icon name="close" onClick={onClose} />
				</div>

				<Form fields={fields} onSubmit={onSendInviteHandler} />

				<div className={classes["add-contact__footer"]}>
					<Button
						onClick={onClose}
						className={classes["add-contact__button"]}
					>
						Close
					</Button>
					<Button className={classes["add-contact__button"]}>
						Invite Contact
					</Button>
				</div>
			</div>
		</Portal>
	);
};

export default AddContact;
