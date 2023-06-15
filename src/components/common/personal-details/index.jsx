import { forwardRef } from "react";
import { nanoid } from "nanoid";

import classes from "./index.module.scss";

const details = [
	{
		id: nanoid(),
		label: "User Name",
		field: "username",
	},
	{
		id: nanoid(),
		label: "Email",
		field: "email",
	},
];

const PersonalDetails = forwardRef(({ profile }, ref) => (
	<div className={classes["personal-details"]} ref={ref}>
		{details.map(({ id, label, field }) => (
			<div key={id} className={classes["personal-details__item"]}>
				<p className={classes["personal-details__label"]}>{label}</p>
				<p className={classes["personal-details__value"]}>
					{profile[field]}
				</p>
			</div>
		))}
	</div>
));

export default PersonalDetails;
