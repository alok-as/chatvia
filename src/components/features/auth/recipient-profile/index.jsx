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
import { useChatStore } from "../../../../store/chat";
import { useLayoutStore } from "../../../../store/layout";

import classes from "./index.module.scss";

const RecipientProfile = () => {
	const onlineUsers = useAuthStore((state) => state.onlineUsers);
	const receiver = useChatStore((state) => state.receiver);

	console.log("receiver", receiver);

	const setIsRecipientProfileVisible = useLayoutStore(
		(state) => state.setIsRecipientProfileVisible
	);

	const isOnline = isUserOnline(onlineUsers, receiver?._id);

	return (
		<div className={classes["recipient-profile"]}>
			<div className={classes["recipient-profile__header"]}>
				<Icon
					name="close"
					className={classes["recipient-profile__icon"]}
					onClick={() => setIsRecipientProfileVisible(false)}
				/>
			</div>

			<div className={classes["recipient-profile__info"]}>
				<Avatar
					imgSrc={receiver?.imageUrl}
					className="margin-bottom-small"
					type="large"
					alt="UserName"
					withBorder={true}
				/>
				<Heading
					type="h3"
					className={classes["recipient-profile__heading"]}
				>
					{receiver?.name ?? receiver?.username}
				</Heading>
				<Status status={isOnline ? "online" : "offline"} />
			</div>
			<div className={classes["recipient-profile__description"]}>
				<Paragraph size="small">{receiver?.description}</Paragraph>
			</div>

			<div className={classes["recipient-profile__details"]}>
				<Accordian title="About" icon="user">
					<PersonalDetails profile={receiver} />
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

export default RecipientProfile;
