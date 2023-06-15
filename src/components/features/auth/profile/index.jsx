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

const Profile = () => {
	const { profile, onlineUsers } = useAuthStore((state) => ({
		profile: state.profile,
		onlineUsers: state.onlineUsers,
	}));

	const isOnline = isUserOnline(onlineUsers, profile.id);

	return (
		<div className={classes["profile"]}>
			<div className={classes["profile__header"]}>
				<Heading type="h1">My Profile</Heading>
				<Icon name="more" className={classes["profile__icon"]} />
			</div>

			<div className={classes["profile__info"]}>
				<Avatar
					imgSrc={profile.imageUrl}
					className="margin-bottom-small"
					type="large"
					alt="UserName"
					withBorder={true}
				/>
				<Heading type="h3" className={classes["profile__heading"]}>
					{profile.username}
				</Heading>
				<Status status={isOnline ? "online" : "offline"} />
			</div>
			<div className={classes["profile__description"]}>
				<Paragraph size="small">{profile.description}</Paragraph>
			</div>

			<div className={classes["profile__details"]}>
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

export default Profile;
