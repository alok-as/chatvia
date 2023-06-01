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
import useRegisterForm from "./use-register-form";

const fields = [
	{
		id: nanoid(),
		name: "email",
		label: "Email",
		type: "email",
		placeholder: "Enter email",
		disabled: false,
		icon: "email",
	},
	{
		id: nanoid(),
		name: "username",
		label: "Username",
		type: "text",
		placeholder: "Enter username",
		disabled: false,
		icon: "user",
	},
	{
		id: nanoid(),
		name: "password",
		label: "Password",
		type: "password",
		placeholder: "Enter password",
		disabled: false,
		icon: "lock",
	},
];

const RegisterForm = () => {
	const { registerUserHandler } = useRegisterForm();
	const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

	if (isAuthenticated) {
		return <Navigate to="/app/chat" replace={true} />;
	}

	return (
		<div className={classes["register-form"]}>
			<Logo className={classes["register-form__logo"]} />
			<Heading type="h1" className={classes["register-form__title"]}>
				Sign up
			</Heading>
			<Paragraph className={classes["register-form__subtitle"]}>
				Get your Chatvia account now.
			</Paragraph>
			<Form
				fields={fields}
				onSubmit={registerUserHandler}
				submitText="Sign up"
				footerText="By registering you agree to the Chatvia Terms of Use"
			/>

			<Paragraph className={classes["register-form__footer"]}>
				Already have an account? <Link to="/login">Signin</Link>
			</Paragraph>
			<Copyright />
		</div>
	);
};

export default RegisterForm;
