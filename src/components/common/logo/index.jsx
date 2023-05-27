import { combineClasses } from "../../../utils";

import classes from "./index.module.scss";
import brandImage from "../../../assets/images/brand.png";

const Logo = ({ className }) => {
	const attachClassHandler = () => {
		const logoClasses = [classes["logo"]];
		className && logoClasses.push(className);
		return combineClasses(logoClasses);
	};

	return (
		<div className={attachClassHandler()}>
			<img
				className={classes["logo__image"]}
				src={brandImage}
				alt="Chatvia"
			/>
		</div>
	);
};

export default Logo;
