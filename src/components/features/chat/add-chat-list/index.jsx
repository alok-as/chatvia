import { ChatCard } from "../../../common";
import classes from "./index.module.scss";

const AddChatList = ({ title, contacts, invite }) => {
	return (
		<div className={classes["add-chat-list"]}>
			<p className={classes["add-chat-list__title"]}>{title}</p>
			<ul className={classes["add-chat-list__contacts"]}>
				{contacts.map((contact) => (
					<ChatCard
						key={contact.email}
						name={contact.name}
						email={contact.email}
						invite={invite}
					/>
				))}
			</ul>
		</div>
	);
};

export default AddChatList;
