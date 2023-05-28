import { Button } from "../../common";
import { FormInput } from "../index";

import classes from "./index.module.scss";

const Form = ({ fields, onSubmit, submitText }) => {
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
		</form>
	);
};

export default Form;
