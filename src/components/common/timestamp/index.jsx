import { combineClasses, formatTimestamp } from "../../../utils";
import Icon from "../icon";
import classes from "./index.module.scss";

const Timestamp = ({ children, className, isFullForm }) => {
	const attachClassHandler = () => {
		const timestampClasses = [classes["timestamp"]];
		className && timestampClasses.push(className);
		return combineClasses(timestampClasses);
	};

	return (
		<span className={attachClassHandler()}>
			{isFullForm && <Icon name="time" />}
			<small>{formatTimestamp(children, { isFullForm })}</small>
		</span>
	);
};

export default Timestamp;
