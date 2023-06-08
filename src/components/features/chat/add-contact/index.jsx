import { nanoid } from "nanoid";
import { toast } from "react-toastify";

import { Heading, Icon, Button, Backdrop } from "../../../common";
import { Form } from "../../../form";

import Portal from "../../portal";
import Contact from "../../../../services/contact";

import classes from "./index.module.scss";
import { useOutsideClick } from "../../../../hooks";

const fields = [
	{
		id: nanoid(),
		type: "text",
		name: "name",
		label: "Name",
		placeholder: "Enter Name",
		disabled: false,
	},
	{
		id: nanoid(),
		type: "email",
		name: "email",
		label: "Email",
		placeholder: "Enter Email",
		disabled: false,
	},
];

const AddContact = ({ onClose, onSuccess }) => {
	const { ref } = useOutsideClick(onClose);

	const onSendInviteHandler = async (e) => {
		try {
			e.preventDefault();
			const targetForm = e.currentTarget;
			const formData = new FormData(targetForm);
			const contactData = Object.fromEntries(formData.entries());

			const { message } = await Contact.create(contactData);
			toast.success(message);
			onSuccess();
			onClose();
		} catch (error) {
			console.log("Error creating contact!", error);
			toast.error("Error creating contact!");
		}
	};

	return (
		<Portal>
			<Backdrop />
			<div ref={ref} className={classes["add-contact"]}>
				<div className={classes["add-contact__header"]}>
					<Heading type="h2">Add Contacts</Heading>
					<Icon name="close" onClick={onClose} />
				</div>

				<Form
					fields={fields}
					onSubmit={onSendInviteHandler}
					submitText="Invite Contact"
				/>
			</div>
		</Portal>
	);
};

export default AddContact;
