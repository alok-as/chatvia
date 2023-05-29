import { Label, Input, Icon } from "../../common";
import classes from "./index.module.scss";

const FormInput = ({
	id,
	name,
	label,
	info,
	infoHref,
	type,
	placeholder,
	icon,
	disabled,
}) => {
	return (
		<div className={classes["form-input"]}>
			{label && (
				<Label info={info} infoHref={infoHref} id={id}>
					{label}
				</Label>
			)}

			<div className={classes["form-input__field"]}>
				{icon && (
					<Icon name={icon} className={classes["form-input__icon"]} />
				)}
				<Input
					id={id}
					type={type}
					name={name}
					placeholder={placeholder}
					disabled={disabled}
				/>
			</div>
		</div>
	);
};

export default FormInput;
