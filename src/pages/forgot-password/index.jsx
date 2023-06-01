import { Row } from "../../components/common";
import { ForgotPasswordForm } from "../../components/features/auth";

import classes from "./index.module.scss";

const ForgotPassword = () => (
	<div className={classes["forgot-password"]}>
		<Row>
			<ForgotPasswordForm />
		</Row>
	</div>
);

export default ForgotPassword;
