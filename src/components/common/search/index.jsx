import { forwardRef } from "react";

import { Icon } from "../index";

import classes from "./index.module.scss";
import { combineClasses } from "../../../utils";

const Search = forwardRef(
	({ placeholder, className, onReset, onChange, name, value }, ref) => {
		const attachClassHandler = () => {
			const searchClasses = [classes["search"]];
			className && searchClasses.push(className);
			return combineClasses(searchClasses);
		};

		return (
			<div className={attachClassHandler()}>
				<Icon name="search" className={classes["search__glass"]} />

				<input
					ref={ref}
					name={name}
					className={classes["search__input"]}
					type="text"
					placeholder={placeholder}
					onChange={onChange}
					value={value}
				/>

				<Icon
					name="close"
					className={classes["search__reset"]}
					onClick={onReset}
				/>
			</div>
		);
	}
);

export default Search;
