import React from "react";

import classes from "./index.module.scss";
import { combineClasses } from "../../../utils";

const Row = ({ children, className }) => {
	const attachClassHandler = () => {
		const rowClasses = [classes["row"]];
		className && rowClasses.push(className);
		return combineClasses(rowClasses);
	};

	return <div className={attachClassHandler()}>{children}</div>;
};

export default Row;
