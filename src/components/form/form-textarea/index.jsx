import { Label, Textarea } from "../../common";
import classes from "./index.module.scss";

const FormTextarea = ({ id, name, label, placeholder, disabled }) => {
	return (
		<div className={classes["form-input"]}>
			{label && <Label id={id}>{label}</Label>}

			<div className={classes["form-input__field"]}>
				<Textarea
					id={id}
					name={name}
					placeholder={placeholder}
					disabled={disabled}
				/>
			</div>
		</div>
	);
};

export default FormTextarea;
