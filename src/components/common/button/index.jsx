import React from "react";

import { combineClasses } from "../../../utils";
import classes from "./index.module.scss";

const Button = ({ children, className, icon }) => {
	const attachClassHandler = () => {
		const buttonClasses = [classes["button"]];
		className && buttonClasses.push(className);
		return combineClasses(buttonClasses);
	};

	return <button className={attachClassHandler()}>{children}</button>;
};

export default Button;
