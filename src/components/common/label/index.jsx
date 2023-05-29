import { Link } from "react-router-dom";
import classes from "./index.module.scss";

const Label = ({ children, info, infoHref, id }) => {
	return (
		<label className={classes["label"]} htmlFor={id}>
			<span>{children}</span>
			{info && (
				<Link to={infoHref} className={classes["label__info"]}>
					{info}
				</Link>
			)}
		</label>
	);
};

export default Label;
