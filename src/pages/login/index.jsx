import { Heading, Logo, Paragraph, Row } from "../../components/common";
import classes from "./index.module.scss";

const Login = () => {
	return (
		<div className={classes["login"]}>
			<Row>
				<div className={classes["login__content"]}>
					<Logo />
					<Heading type="h1">Sign In</Heading>
					<Paragraph>Sign in to continue to Chatvia.</Paragraph>
				</div>
			</Row>
		</div>
	);
};

export default Login;
