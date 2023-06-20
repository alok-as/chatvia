import { useRef, useState } from "react";
import { isUserOnline } from "../../../../utils";
import {
	Heading,
	Icon,
	Avatar,
	Paragraph,
	Status,
	Accordian,
	PersonalDetails,
	Attachment,
} from "../../../common";

import { useAuthStore } from "../../../../store/auth";
import classes from "./index.module.scss";

const Settings = () => {
	const fileRef = useRef();

	const { profile, onlineUsers } = useAuthStore((state) => ({
		profile: state.profile,
		onlineUsers: state.onlineUsers,
	}));

	const [uploadedImg, setUploadedImg] = useState(null);
	const isOnline = isUserOnline(onlineUsers, profile.id);

	const onClickUploadHandler = () => {
		fileRef.current.click();
	};

	const onUploadHandler = (e) => {
		const file = e.target.files[0];
		const url = URL.createObjectURL(file);
		setUploadedImg(url);
	};

	return (
		<div className={classes["settings"]}>
			<div className={classes["settings__header"]}>
				<Heading type="h1">Settings</Heading>
			</div>

			<div className={classes["settings__info"]}>
				<div className={classes["settings__avatar"]}>
					<Avatar
						imgSrc={uploadedImg ?? profile.imageUrl}
						className="margin-bottom-small"
						type="large"
						alt="UserName"
						withBorder={true}
					/>
					<input
						ref={fileRef}
						type="file"
						accept=".jpg, .jpeg, .png, .webp"
						onChange={onUploadHandler}
						className={classes["settings__input"]}
					/>
					<Icon
						name="edit"
						className={classes["settings__icon"]}
						onClick={onClickUploadHandler}
					/>
				</div>
				<Heading type="h3" className={classes["settings__heading"]}>
					{profile.username}
				</Heading>
				<Status status={isOnline ? "online" : "offline"} />
			</div>
			<div className={classes["settings__description"]}>
				<Paragraph size="small">{profile.description}</Paragraph>
			</div>

			<div className={classes["settings__details"]}>
				<Accordian title="About" icon="user">
					<PersonalDetails profile={profile} />
				</Accordian>
				<Accordian title="Attached Files" icon="attachment">
					<div>
						<Attachment />
						<Attachment />
					</div>
				</Accordian>
			</div>
		</div>
	);
};

export default Settings;
