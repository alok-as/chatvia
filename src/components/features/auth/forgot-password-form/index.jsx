import { nanoid } from "nanoid";
import { Link, Navigate } from "react-router-dom";

import { useAuthStore } from "../store";
import { Heading, Logo, Paragraph, Copyright } from "../../../common";
import { Form } from "../../../form";

import classes from "./index.module.scss";
import useForgotForm from "./use-forgot-form";

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
];

const ForgotPasswordForm = () => {
	const { forgotPasswordHandler } = useForgotForm();
	const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

	if (isAuthenticated) {
		return <Navigate to="/app" replace={true} />;
	}

	return (
		<div className={classes["forgot-password-form"]}>
			<Logo className={classes["forgot-password-form__logo"]} />
			<Heading
				type="h1"
				className={classes["forgot-password-form__title"]}
			>
				Reset Password
			</Heading>
			<Paragraph className={classes["forgot-password-form__subtitle"]}>
				Reset Password with Chatvia.
			</Paragraph>
			<Form
				fields={fields}
				onSubmit={forgotPasswordHandler}
				submitText="Reset"
			/>

			<Paragraph className={classes["forgot-password-form__footer"]}>
				Remember it? <Link to="/login">Signin</Link>
			</Paragraph>
			<Copyright />
		</div>
	);
};

export default ForgotPasswordForm;
