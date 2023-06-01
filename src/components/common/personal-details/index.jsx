import { forwardRef } from "react";
import { nanoid } from "nanoid";

import classes from "./index.module.scss";

const details = [
	{
		id: nanoid(),
		label: "Name",
		value: "Alok Sharma",
	},
	{
		id: nanoid(),
		label: "Email",
		value: "alok.sharma61630@gmail.com",
	},
	{
		id: nanoid(),
		label: "Location",
		value: "New Delhi, India",
	},
];

const PersonalDetails = forwardRef((_, ref) => (
	<div className={classes["personal-details"]} ref={ref}>
		{details.map(({ id, label, value }) => (
			<div key={id} className={classes["personal-details__item"]}>
				<p className={classes["personal-details__label"]}>{label}</p>
				<p className={classes["personal-details__value"]}>{value}</p>
			</div>
		))}
	</div>
));

export default PersonalDetails;
