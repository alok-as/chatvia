import Icons from "../../../assets/icons";

import classes from "./index.module.scss";
import { combineClasses } from "../../../utils";

const Icon = ({ name = "home", className, onClick }) => {
	const attachClassHandler = () => {
		const iconClasses = [];
		className && iconClasses.push(className);
		return combineClasses(iconClasses);
	};

	const Component = Icons[name];
	return (
		<span className={attachClassHandler()}>
			<Component className={classes["icon"]} onClick={onClick} />
		</span>
	);
};

export default Icon;
