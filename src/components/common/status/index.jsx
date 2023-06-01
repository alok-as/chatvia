import { combineClasses } from "../../../utils";
import classes from "./index.module.scss";

const TextSpecs = {
	online: "Active",
	offline: "Inactive",
};

const Status = ({ status }) => {
	const attachClassHandler = () => {
		const statusClasses = [classes["status"], classes[`status--${status}`]];
		return combineClasses(statusClasses);
	};

	return <div className={attachClassHandler()}>{TextSpecs[status]}</div>;
};

export default Status;
