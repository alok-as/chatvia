import { useState, useRef, cloneElement } from "react";
import { Icon } from "../index";

import classes from "./index.module.scss";
import { combineClasses, getRootFontValue } from "../../../utils";

const Accordian = ({ icon, title, children }) => {
	const ref = useRef();
	const [isOpen, setIsOpen] = useState(false);

	const onToggleAccordianHandler = () => {
		setIsOpen((isOpen) => !isOpen);
	};

	const getHeight = (height) => {
		if (!height) return;

		const remValue = getRootFontValue();
		return `${height + 2.4 * remValue}px`;
	};

	let style;
	if (isOpen) {
		style = { height: getHeight(ref.current?.offsetHeight) };
	}

	return (
		<div className={classes["accordian"]}>
			<div
				className={classes["accordian__header"]}
				onClick={onToggleAccordianHandler}
			>
				<h5 className={classes["accordian__title"]}>
					<Icon name={icon} className={classes["accordian__about"]} />
					<span>{title}</span>
				</h5>
				<Icon
					name="rightArrow"
					className={combineClasses(
						classes["accordian__arrow"],
						isOpen && classes["accordian__arrow--rotate"]
					)}
				/>
			</div>
			<div className={classes["accordian__content"]} style={style}>
				<div className={classes["accordian__body"]}>
					{cloneElement(children, { ref })}
				</div>
			</div>
		</div>
	);
};

export default Accordian;
