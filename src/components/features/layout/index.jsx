import Sidebar from "../../features/sidebar";
import { ChatArea } from "../../features/chat";

import classes from "./index.module.scss";

const Layout = () => {
	return (
		<div className={classes["layout"]}>
			<Sidebar />
			<ChatArea />
		</div>
	);
};

export default Layout;
