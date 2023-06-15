import { Outlet } from "react-router-dom";
import { nanoid } from "nanoid";
import { shallow } from "zustand/shallow";

import { Icon } from "../../common";
import Navigation from "./navigation";
import Logo from "./logo";
import Options from "./options";

import { useThemeStore } from "../../../store/theme";
import { setKeyInLocalStorage } from "../../../utils";

import classes from "./index.module.scss";

const Sidebar = () => {
	const { theme, setTheme } = useThemeStore(
		(state) => ({
			theme: state.theme,
			setTheme: state.setTheme,
		}),
		shallow
	);

	const options = [
		{
			key: nanoid(),
			position: "right",
			title: "Dark / Light Mode",
			icon: <Icon name="moon" className={classes["sidebar__icon"]} />,
			onClick: () => {
				const newTheme = theme === "dark" ? "light" : "dark";
				setKeyInLocalStorage("theme", newTheme);
				setTheme(newTheme);
			},
		},
	];

	return (
		<aside className={classes["sidebar"]}>
			<div className={classes["sidebar__navigation"]}>
				<Logo />
				<Navigation />
				<Options options={options} />
			</div>
			<div className={classes["sidebar__content"]}>
				<Outlet />
			</div>
		</aside>
	);
};

export default Sidebar;
