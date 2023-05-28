import classes from "./index.module.scss";

const Input = ({ id, type, name, placeholder, disabled }) => {
	return (
		<input
			id={id}
			type={type}
			name={name}
			placeholder={placeholder}
			disabled={disabled}
			className={classes["input"]}
		/>
	);
};

export default Input;
