import classes from "./index.module.scss";
import logoImage from "../../../../assets/images/logo.svg";

const Logo = () => (
	<div className={classes["logo"]}>
		<img className={classes["logo__image"]} src={logoImage} alt="Chatvia" />
	</div>
);

export default Logo;
