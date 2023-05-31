import Navigation from "./navigation";
import Logo from "./logo";
import Options from "./options";

import classes from "./index.module.scss";
import { Outlet } from "react-router-dom";

const Sidebar = () => {
	return (
		<aside className={classes["sidebar"]}>
			<div className={classes["sidebar__navigation"]}>
				<Logo />
				<Navigation />
				<Options />
			</div>
			<div className={classes["sidebar__content"]}>
				<Outlet />
			</div>
		</aside>
	);
};

export default Sidebar;
