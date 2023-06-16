import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

import { Avatar, Dropdown, Tab } from "../../../common";

import { useAuthStore } from "../../../../store/auth";
import { removeAuthTokens } from "../../../../utils";

import classes from "./index.module.scss";

const Options = ({ options }) => {
	const navigate = useNavigate();
	const setUserProfile = useAuthStore((state) => state.setUserProfile);

	const dropdownOptions = [
		{
			id: nanoid(),
			title: "Profile",
			icon: "user",
			onClick: () => navigate("/app/profile"),
		},
		{
			id: nanoid(),
			title: "Settings",
			icon: "setting",
			onClick: () => navigate("/app/settings"),
		},
		{
			id: nanoid(),
			title: "Log out",
			icon: "logout",
			onClick: () => {
				removeAuthTokens();
				setUserProfile(null);
				navigate("/login");
			},
		},
	];

	return (
		<div className={classes.user__options}>
			{options.map((option) => (
				<Tab
					key={option.key}
					title={option.title}
					position={option.position}
					onClick={option.onClick}
				>
					{option.icon}
				</Tab>
			))}

			<Dropdown
				toggler={() => (
					<Avatar imgSrc="http://chatvia-light.react.themesbrand.com/static/media/avatar-1.3921191a8acf79d3e907.jpg" />
				)}
				yaxis="up"
				xaxis="left"
				options={dropdownOptions}
			/>
		</div>
	);
};

export default Options;
