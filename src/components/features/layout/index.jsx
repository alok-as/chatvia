import Sidebar from "../../features/sidebar";
import { ChatArea } from "../../features/chat";

import classes from "./index.module.scss";
import useLayout from "./use-layout";

const Layout = () => {
	const { roomId } = useLayout();

	return (
		<div className={classes["layout"]}>
			<Sidebar />
			{roomId && <ChatArea />}
		</div>
	);
};

export default Layout;
