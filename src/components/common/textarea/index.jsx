import classes from "./index.module.scss";

const Input = ({ id, type, name, placeholder, rows = 5, disabled }) => {
	return (
		<textarea
			id={id}
			name={name}
			placeholder={placeholder}
			disabled={disabled}
			rows={rows}
			className={classes["textarea"]}
		/>
	);
};

export default Input;
