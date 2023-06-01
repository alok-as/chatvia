import { combineClasses, createAvatarPlaceholder } from "../../../utils";
import classes from "./index.module.scss";

const Avatar = ({
	type = "small",
	className,
	imgSrc,
	alt = "Avatar Name",
	status,
	withBorder,
}) => {
	const attachClassHandler = () => {
		const avatarClasses = [classes["avatar"], classes[`avatar--${type}`]];
		withBorder && avatarClasses.push(classes["avatar__border"]);
		className && avatarClasses.push(className);
		!imgSrc && avatarClasses.push(classes["avatar__bg"]);
		return combineClasses(avatarClasses);
	};
	return (
		<div className={attachClassHandler()}>
			{imgSrc ? (
				<img
					className={classes["avatar__image"]}
					src={imgSrc}
					alt={alt}
				/>
			) : (
				<p className={classes["avatar__text"]}>
					{createAvatarPlaceholder(alt)}
				</p>
			)}
			<div
				className={combineClasses(
					classes["avatar__status"],
					classes[`avatar__status--${status}`]
				)}
			></div>
		</div>
	);
};

export default Avatar;
