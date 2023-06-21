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

import classes from "./index.module.scss";
import useProfile from "./use-profile";

const Profile = () => {
	const { profile, attachments } = useProfile();

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
				<Status status="online" />
			</div>
			<div className={classes["profile__description"]}>
				<Paragraph size="small">{profile.description}</Paragraph>
			</div>

			<div className={classes["profile__details"]}>
				<Accordian title="About" icon="user">
					<PersonalDetails profile={profile} />
				</Accordian>
				{attachments.length !== 0 && (
					<Accordian title="Attached Files" icon="attachment">
						<div>
							{attachments.map(({ id, filename, size, url }) => (
								<Attachment
									key={id}
									url={url}
									filename={filename}
									size={size}
								/>
							))}
						</div>
					</Accordian>
				)}
			</div>
		</div>
	);
};

export default Profile;
