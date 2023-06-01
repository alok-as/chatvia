import { Row } from "../../components/common";
import { RegisterForm } from "../../components/features/auth";

import classes from "./index.module.scss";

const Register = () => {
	return (
		<div className={classes["register"]}>
			<Row>
				<RegisterForm />
			</Row>
		</div>
	);
};

export default Register;
