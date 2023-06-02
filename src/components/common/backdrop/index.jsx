import classes from "./index.module.scss";

const Backdrop = ({ onClose }) => {
	return <div className={classes["backdrop"]} onClick={onClose}></div>;
};

export default Backdrop;
