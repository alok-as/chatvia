import { forwardRef } from "react";
import classes from "./index.module.scss";

const PersonalDetails = forwardRef(({ profile }, ref) => (
	<div className={classes["personal-details"]} ref={ref}>
		<div className={classes["personal-details__item"]}>
			<p className={classes["personal-details__label"]}>User Name</p>
			<p className={classes["personal-details__value"]}>
				{profile.username}
			</p>
		</div>
		<div className={classes["personal-details__item"]}>
			<p className={classes["personal-details__label"]}>Email</p>
			<p className={classes["personal-details__value"]}>
				{profile.email}
			</p>
		</div>
		<div className={classes["personal-details__item"]}>
			<p className={classes["personal-details__label"]}>Description</p>
			<p className={classes["personal-details__value"]}>
				{profile?.description ?? "Hey Guys, I am on Chatvia."}
			</p>
		</div>
	</div>
));

export default PersonalDetails;
