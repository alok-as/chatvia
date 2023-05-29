import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

import {
	Heading,
	Logo,
	Paragraph,
	Row,
	Copyright,
} from "../../components/common";
import { Form } from "../../components/form";

import classes from "./index.module.scss";
import useLogin from "./use-login";

const fields = [
	{
		id: nanoid(),
		name: "email",
		label: "Username",
		type: "email",
		placeholder: "Enter email",
		icon: "user",
		disabled: false,
	},
	{
		id: nanoid(),
		name: "password",
		label: "Password",
		type: "password",
		info: "Forgot Password?",
		infoHref: "/forgot-password",
		placeholder: "Enter password",
		icon: "lock",
		disabled: false,
	},
];

const Login = () => {
	const { loginUserHandler } = useLogin();

	return (
		<div className={classes["login"]}>
			<Row>
				<div className={classes["login__content"]}>
					<Logo className={classes["login__logo"]} />
					<Heading type="h1" className={classes["login__title"]}>
						Sign in
					</Heading>
					<Paragraph className={classes["login__subtitle"]}>
						Sign in to continue to Chatvia.
					</Paragraph>
					<Form
						fields={fields}
						onSubmit={loginUserHandler}
						submitText="Sign In"
					/>

					<Paragraph className={classes["login__footer"]}>
						Don't have an account?{" "}
						<Link to="/register">Signup now</Link>
					</Paragraph>
					<Copyright />
				</div>
			</Row>
		</div>
	);
};

export default Login;
