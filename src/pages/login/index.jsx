import { Row } from "../../components/common";
import { LoginForm } from "../../components/features/auth";

import classes from "./index.module.scss";

const Login = () => (
	<div className={classes["login"]}>
		<Row>
			<LoginForm />
		</Row>
	</div>
);

export default Login;
