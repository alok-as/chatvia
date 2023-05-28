import Icon from "../icon";
import classes from "./index.module.scss";

const Copyright = () => {
	return (
		<p className={classes["copyright"]}>
			&copy; 2021 Chatvia. Crafted with by
			<Icon className={classes["copyright__icon"]} name="heart" />
			Themesbrand
		</p>
	);
};

export default Copyright;
