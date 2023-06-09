import classes from "./index.module.scss";

const Input = ({
	id,
	type,
	name,
	placeholder,
	disabled,
	value,
	onChange,
	onKeyDown,
}) => {
	return (
		<input
			id={id}
			type={type}
			name={name}
			placeholder={placeholder}
			disabled={disabled}
			value={value}
			onChange={onChange}
			className={classes["input"]}
			onKeyDown={onKeyDown}
		/>
	);
};

export default Input;
