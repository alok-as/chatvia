import { Icon } from "../index";
import classes from "./index.module.scss";

const Contact = ({ children }) => {
	return (
		<li className={classes["contact"]}>
			<span className={classes["contact__name"]}>{children}</span>
			<Icon className={classes["contact__icon"]} name="more" />
		</li>
	);
};

const ContactGroup = ({ initial, contacts }) => {
	return (
		<div className={classes["contact-group"]}>
			<h5 className={classes["contact-group__initial"]}>{initial}</h5>
			<ul className={classes["contact-group__list"]}>
				{contacts.map((contact) => (
					<Contact key={contact.name}>{contact.name}</Contact>
				))}
			</ul>
		</div>
	);
};

export default ContactGroup;
