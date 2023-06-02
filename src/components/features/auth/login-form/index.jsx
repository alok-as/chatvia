import { nanoid } from "nanoid";
import { Link, Navigate } from "react-router-dom";

import { useAuthStore } from "../store";
import {
	Heading,
	Logo,
	Paragraph,
	Copyright,
} from "../../../../components/common";
import { Form } from "../../../../components/form";

import classes from "./index.module.scss";
import useLoginForm from "./use-login-form";

const fields = [
	{
		id: nanoid(),
		name: "username",
		label: "Username",
		type: "text",
		placeholder: "Enter username or email",
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

const LoginForm = () => {
	const { loginUserHandler } = useLoginForm();
	const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

	if (isAuthenticated) {
		return <Navigate to="/app/chat" replace={true} />;
	}

	return (
		<div className={classes["login-form"]}>
			<Logo className={classes["login-form__logo"]} />

			<Heading type="h1" className={classes["login-form__title"]}>
				Sign in
			</Heading>

			<Paragraph className={classes["login-form__subtitle"]}>
				Sign in to continue to Chatvia.
			</Paragraph>

			<Form
				fields={fields}
				onSubmit={loginUserHandler}
				submitText="Sign In"
			/>

			<Paragraph className={classes["login-form__footer"]}>
				Don't have an account? <Link to="/register">Signup now</Link>
			</Paragraph>
			<Copyright />
		</div>
	);
};

export default LoginForm;
