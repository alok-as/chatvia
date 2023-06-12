import { Heading, Icon, Search } from "../../../common";
import UserCard from "./user-card";
import AddChat from "./add-chat";

import classes from "./index.module.scss";
import useRecentChats from "./use-recent-chats";

const Recent = () => {
	const {
		ref,
		registeredContacts,
		nonRegisteredContacts,
		searchInput,
		recentChats,
		activeRoomId,
		isModalOpen,
		initiateChatHandler,
		onResetInputHandler,
		onInputChangeHandler,
		onOpenModalHandler,
		onCloseModalHandler,
		filterResults,
	} = useRecentChats();

	return (
		<div className={classes["recent-chats"]}>
			<div className={classes["recent-chats__header"]}>
				<Heading type="h1" className={classes["recent-chats__heading"]}>
					Chats
				</Heading>

				<Icon
					name="add-user"
					className={classes["recent-chats__icon"]}
					onClick={onOpenModalHandler}
				/>
			</div>

			<Search
				ref={ref}
				type="search"
				value={searchInput}
				placeholder="Search messages or users"
				onReset={onResetInputHandler}
				onChange={onInputChangeHandler}
			/>

			<Heading type="h2" className={classes["recent-chats__subheading"]}>
				Recent
			</Heading>

			<div className={classes.recent__messages}>
				{filterResults(recentChats).map(
					({
						chatRoomId,
						message,
						name,
						imageUrl,
						sentAt,
						userId,
					}) => (
						<UserCard
							key={chatRoomId}
							name={name}
							avatar={imageUrl}
							text={message}
							timestamp={sentAt}
							isActive={chatRoomId === activeRoomId}
							isOnline={false}
							onClick={() =>
								initiateChatHandler(chatRoomId, userId, name)
							}
						/>
					)
				)}
			</div>

			{isModalOpen && (
				<AddChat
					onClose={onCloseModalHandler}
					initiateChat={initiateChatHandler}
					registeredContacts={registeredContacts}
					nonRegisteredContacts={nonRegisteredContacts}
				/>
			)}
		</div>
	);
};

export default Recent;
