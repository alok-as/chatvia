import { combineClasses, formatTimestamp } from "../../../utils";

import classes from "./index.module.scss";

const Timestamp = ({ children, className }) => {
	const attachClassHandler = () => {
		const timestampClasses = [classes["timestamp"]];
		className && timestampClasses.push(className);
		return combineClasses(timestampClasses);
	};

	return (
		<small className={attachClassHandler()}>
			{formatTimestamp(children)}
		</small>
	);
};

export default Timestamp;
