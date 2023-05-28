import classes from "./index.module.scss";
import { combineClasses } from "../../../utils";

const Paragraph = ({ className, size = "large", children }) => {
	const attachClassHandler = () => {
		const paragraphClasses = [
			classes["paragraph"],
			classes[`paragraph--${size}`],
		];
		className && paragraphClasses.push(className);
		return combineClasses(paragraphClasses);
	};

	return <p className={attachClassHandler()}>{children}</p>;
};

export default Paragraph;
