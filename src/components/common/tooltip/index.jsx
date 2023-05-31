import { cloneElement } from "react";
import classes from "./index.module.scss";

const Tooltip = ({ text, children, position = "top" }) => {
	return cloneElement(children, {
		className: [
			children.props.className,
			classes["tooltip"],
			classes[`tooltip--${position}`],
		].join(" "),
		"data-text": text,
	});
};

export default Tooltip;
