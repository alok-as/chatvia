import { NavLink } from "react-router-dom";

import { Tooltip } from "../index";
import { combineClasses } from "../../../utils";

import classes from "./index.module.scss";

const Tab = ({ children, title, to, position, onClick, isLink }) => {
	if (isLink) {
		return (
			<Tooltip text={title} position={position}>
				<li className={classes["tab"]}>
					<NavLink
						to={to}
						className={({ isActive }) =>
							isActive
								? combineClasses(
										classes["tab__link"],
										classes["tab__link--active"]
								  )
								: classes["tab__link"]
						}
					>
						{children}
					</NavLink>
				</li>
			</Tooltip>
		);
	}

	return (
		<Tooltip text={title} position={position}>
			<li
				className={combineClasses(classes["tab"], classes["tab__item"])}
				onClick={onClick}
			>
				{children}
			</li>
		</Tooltip>
	);
};
export default Tab;
