import React from "react";
import classes from "./index.module.scss";

const Label = ({ children, info, id }) => {
	return (
		<label className={classes["label"]} htmlFor={id}>
			<span>{children}</span>
			{info && <small className={classes["label__info"]}>{info}</small>}
		</label>
	);
};

export default Label;
