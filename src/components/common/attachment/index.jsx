import { forwardRef } from "react";
import { Icon } from "../index";
import classes from "./index.module.scss";

const Attachment = forwardRef((_, ref) => (
	<div className={classes["attachment"]} ref={ref}>
		<div className={classes["attachment__file"]}>
			<Icon name="file" className={classes["attachment__file-icon"]} />
		</div>
		<div className={classes["attachment__info"]}>
			<span className={classes["attachment__name"]}>Admin-A.zip</span>
			<span className={classes["attachment__size"]}>12.5 MB</span>
		</div>
		<div className={classes["attachment__actions"]}>
			<Icon name="download" className={classes["attachment__icon"]} />
			<Icon name="more" className={classes["attachment__icon"]} />
		</div>
	</div>
));

export default Attachment;
