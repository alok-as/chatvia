import Sidebar from "../../features/sidebar";
import Chat from "../../features/chat";

import classes from "./index.module.scss";

const Layout = () => {
	return (
		<div className={classes["layout"]}>
			<Sidebar />
			<Chat />
		</div>
	);
};

export default Layout;
