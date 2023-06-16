import { useState } from "react";

import Icon from "../icon";
import { useOutsideClick } from "../../../hooks";

import classes from "./index.module.scss";
import { combineClasses } from "../../../utils";

const Dropdown = ({ toggler, yaxis, xaxis, options }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenuHandler = () => {
		setIsMenuOpen((isMenuOpen) => !isMenuOpen);
	};

	const closeMenuHandler = () => {
		setIsMenuOpen(false);
	};

	const { ref } = useOutsideClick(closeMenuHandler);

	return (
		<div ref={ref} className={classes["dropdown"]}>
			<div
				className={classes["dropdown__toggle"]}
				onClick={toggleMenuHandler}
			>
				{toggler()}
			</div>
			{isMenuOpen && (
				<div
					className={combineClasses(
						classes["dropdown__menu"],
						classes[`dropdown__menu--${xaxis}`],
						classes[`dropdown__menu--${yaxis}`]
					)}
				>
					<ul className="dropdown__list">
						{options.map(({ id, title, icon, onClick }) => (
							<li
								key={id}
								onClick={() => {
									onClick();
									closeMenuHandler();
								}}
								className={classes["dropdown__item"]}
							>
								<span>{title}</span>
								<Icon name={icon} />
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default Dropdown;
