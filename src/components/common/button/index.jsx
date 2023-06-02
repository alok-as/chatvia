import classes from "./index.module.scss";
import { combineClasses } from "../../../utils";

const Button = ({ children, className, onClick }) => {
	const attachClassHandler = () => {
		const buttonClasses = [classes["button"]];
		className && buttonClasses.push(className);
		return combineClasses(buttonClasses);
	};

	return (
		<button className={attachClassHandler()} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
