export const combineClasses = (...classes) => {
	return classes
		.flat()
		.filter((c) => Boolean(c))
		.join(" ");
};
