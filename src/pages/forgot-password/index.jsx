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
import useForgot from "./use-forgot";

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

const ForgotPassword = () => {
	const { forgotUserHandler } = useForgot();

	return (
		<div className={classes["forgot"]}>
			<Row>
				<div className={classes["forgot__content"]}>
					<Logo className={classes["forgot__logo"]} />
					<Heading type="h1" className={classes["forgot__title"]}>
						Reset Password
					</Heading>
					<Paragraph className={classes["forgot__subtitle"]}>
						Reset Password with Chatvia.
					</Paragraph>
					<Form
						fields={fields}
						onSubmit={forgotUserHandler}
						submitText="Reset"
					/>

					<Paragraph className={classes["forgot__footer"]}>
						Remember it? <Link to="/login">Signin</Link>
					</Paragraph>
					<Copyright />
				</div>
			</Row>
		</div>
	);
};

export default ForgotPassword;
