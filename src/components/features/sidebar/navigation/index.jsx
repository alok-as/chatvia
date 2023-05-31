import { nanoid } from "nanoid";

import { Icon, Tab } from "../../../common";

import classes from "./index.module.scss";

const tabs = [
	{
		key: nanoid(),
		title: "Profile",
		to: "/app/profile",
		icon: <Icon name="user" className={classes["navigation__icon"]} />,
	},
	{
		key: nanoid(),
		title: "Chat",
		to: "/app/chat",
		icon: <Icon name="message" className={classes["navigation__icon"]} />,
	},
	{
		key: nanoid(),
		title: "Groups",
		to: "/app/groups",
		icon: <Icon name="group" className={classes["navigation__icon"]} />,
	},
	{
		key: nanoid(),
		title: "Contacts",
		to: "/app/contacts",
		icon: <Icon name="contact" className={classes["navigation__icon"]} />,
	},
	{
		key: nanoid(),
		to: "/app/settings",
		title: "Settings",
		icon: <Icon name="setting" className={classes["navigation__icon"]} />,
	},
];

const Navigation = () => {
	return (
		<nav className={classes["navigation"]}>
			<ul>
				{tabs.map((tab) => (
					<Tab
						key={tab.key}
						title={tab.title}
						to={tab.to}
						isLink={true}
					>
						{tab.icon}
					</Tab>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
