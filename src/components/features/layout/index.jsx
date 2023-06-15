import Sidebar from "../../features/sidebar";
import { ChatArea } from "../../features/chat";
import { RecipientProfile } from "../../features/auth";

import classes from "./index.module.scss";
import useLayout from "./use-layout";

const Layout = () => {
	const { roomId, isRecipientProfileVisible } = useLayout();

	return (
		<div className={classes["layout"]}>
			<Sidebar />
			{roomId && <ChatArea />}
			{roomId && isRecipientProfileVisible && <RecipientProfile />}
		</div>
	);
};

export default Layout;
