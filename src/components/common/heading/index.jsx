import { createElement } from "react";
import { combineClasses } from "../../../utils";

import classes from "./index.module.scss";

const Heading = ({ type, children, className }) => {
	const attachClassHandler = () => {
		const logoClasses = [classes["heading"], classes[`heading__${type}`]];
		className && logoClasses.push(className);
		return combineClasses(logoClasses);
	};

	return createElement(type, { className: attachClassHandler() }, children);
};

export default Heading;
