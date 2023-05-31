import { nanoid } from "nanoid";
import { Link, Navigate } from "react-router-dom";

import { useAuthStore } from "../../store/auth";
import {
	Heading,
	Logo,
	Paragraph,
	Row,
	Copyright,
} from "../../components/common";
import { Form } from "../../components/form";

import classes from "./index.module.scss";
import useRegister from "./user-register";

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

const Register = () => {
	const { registerUserHandler } = useRegister();
	const isAuthenticated = useAuthStore(() => state.isAuthenticated);

	if (isAuthenticated) {
		return <Navigate to="/" replace={true} />;
	}

	return (
		<div className={classes["register"]}>
			<Row>
				<div className={classes["register__content"]}>
					<Logo className={classes["register__logo"]} />
					<Heading type="h1" className={classes["register__title"]}>
						Sign up
					</Heading>
					<Paragraph className={classes["register__subtitle"]}>
						Get your Chatvia account now.
					</Paragraph>
					<Form
						fields={fields}
						onSubmit={registerUserHandler}
						submitText="Sign up"
						footerText="By registering you agree to the Chatvia Terms of Use"
					/>

					<Paragraph className={classes["register__footer"]}>
						Already have an account? <Link to="/login">Signin</Link>
					</Paragraph>
					<Copyright />
				</div>
			</Row>
		</div>
	);
};

export default Register;
