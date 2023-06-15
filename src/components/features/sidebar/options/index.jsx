import { nanoid } from "nanoid";

import { Avatar, Icon, Tab } from "../../../common";
import classes from "./index.module.scss";

const tabs = [
	{
		key: nanoid(),
		position: "right",
		title: "Dark / Light Mode",
		icon: <Icon name="moon" className={classes["user__icon"]} />,
		onClick: () => {},
	},
];

const Options = () => (
	<div className={classes.user__options}>
		{tabs.map((tab) => (
			<Tab
				key={tab.key}
				title={tab.title}
				position={tab.position}
				onClick={tab.onClick}
			>
				{tab.icon}
			</Tab>
		))}
		<Avatar imgSrc="http://chatvia-light.react.themesbrand.com/static/media/avatar-1.3921191a8acf79d3e907.jpg" />
	</div>
);

export default Options;
