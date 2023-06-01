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

const Profile = () => {
	return (
		<div className={classes["profile"]}>
			<div className={classes["profile__header"]}>
				<Heading type="h1">My Profile</Heading>
				<Icon name="more" className={classes["profile__icon"]} />
			</div>

			<div className={classes["profile__info"]}>
				<Avatar
					imgSrc="http://chatvia-light.react.themesbrand.com/static/media/avatar-1.3921191a8acf79d3e907.jpg"
					className="margin-bottom-small"
					type="large"
					alt="UserName"
					withBorder={true}
				/>
				<Heading type="h3" className={classes["profile__heading"]}>
					Alok Sharma
				</Heading>
				<Status status="online" />
			</div>
			<div className={classes["profile__description"]}>
				<Paragraph size="small">
					If several languages coalesce, the grammar of the resulting
					language is more simple and regular than that of the
					individual.
				</Paragraph>
			</div>

			<div className={classes["profile__details"]}>
				<Accordian title="About" icon="user">
					<PersonalDetails />
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
