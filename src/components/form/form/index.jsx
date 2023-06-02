import { Button, Paragraph } from "../../common";
import { FormInput, FormTextarea } from "../index";

import classes from "./index.module.scss";

const Form = ({ fields, onSubmit, submitText, footerText }) => {
	const onSubmitHandler = (e) => {
		e.preventDefault();
		onSubmit(e);
	};

	return (
		<form className={classes["form"]} onSubmit={onSubmitHandler}>
			{fields.map((field) => {
				if (["email", "text", "password"].includes(field.type)) {
					return <FormInput key={field.id} {...field} />;
				} else {
					return <FormTextarea key={field.id} {...field} />;
				}
			})}
			{submitText && <Button>{submitText}</Button>}
			{footerText && (
				<Paragraph className={classes["form__footer"]} size="small">
					{footerText}
				</Paragraph>
			)}
		</form>
	);
};

export default Form;
