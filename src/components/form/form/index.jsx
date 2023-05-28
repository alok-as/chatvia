import { Button, Paragraph } from "../../common";
import { FormInput } from "../index";

import classes from "./index.module.scss";

const Form = ({ fields, onSubmit, submitText, footerText }) => {
	const onSubmitHandler = (e) => {
		e.preventDefault();
		onSubmit(e);
	};

	return (
		<form className={classes["form"]} onSubmit={onSubmitHandler}>
			{fields.map((field) => (
				<FormInput key={field.id} {...field} />
			))}
			<Button>{submitText}</Button>
			{footerText && (
				<Paragraph className={classes["form__footer"]} size="small">
					{footerText}
				</Paragraph>
			)}
		</form>
	);
};

export default Form;
