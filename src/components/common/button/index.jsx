import classes from "./index.module.scss";
import { combineClasses } from "../../../utils";
import Icon from "../icon";

const Button = ({ children, className, onClick, icon }) => {
	const attachClassHandler = () => {
		const buttonClasses = [classes["button"]];
		className && buttonClasses.push(className);
		return combineClasses(buttonClasses);
	};

	return (
		<button className={attachClassHandler()} onClick={onClick}>
			{icon && <Icon className={classes["button__icon"]} name={icon} />}
			{children}
		</button>
	);
};

export default Button;
