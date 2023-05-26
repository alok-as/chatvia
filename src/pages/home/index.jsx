import Sidebar from "../../components/features/sidebar";
import Chat from "../../components/features/chat";

import classes from "./index.module.scss";

const Home = () => {
	return (
		<div className={classes["home"]}>
			<Sidebar />
			<Chat />
		</div>
	);
};

export default Home;
