import { Icon } from "../index";
import classes from "./index.module.scss";

const Attachment = ({ id, url, filename, size, folder }) => (
	<a
		href={url}
		download={filename}
		target="_blank"
		rel="noopener noreferrer"
		className={classes["attachment"]}
	>
		<div className={classes["attachment__file"]}>
			<Icon name="image" className={classes["attachment__file-icon"]} />
		</div>
		<div className={classes["attachment__info"]}>
			<span className={classes["attachment__name"]}>{filename}</span>
			<span className={classes["attachment__size"]}>{size} KB</span>
		</div>
		<div className={classes["attachment__actions"]}>
			<Icon name="download" className={classes["attachment__icon"]} />
		</div>
	</a>
);

export default Attachment;
