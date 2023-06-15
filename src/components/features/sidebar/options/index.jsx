import { Avatar, Tab } from "../../../common";
import classes from "./index.module.scss";

const Options = ({ options }) => (
	<div className={classes.user__options}>
		{options.map((option) => (
			<Tab
				key={option.key}
				title={option.title}
				position={option.position}
				onClick={option.onClick}
			>
				{option.icon}
			</Tab>
		))}
		<Avatar imgSrc="http://chatvia-light.react.themesbrand.com/static/media/avatar-1.3921191a8acf79d3e907.jpg" />
	</div>
);

export default Options;
