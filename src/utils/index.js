import config from "../config";
import Cookies from "js-cookie";

export const combineClasses = (...classes) => {
	return classes
		.flat()
		.filter((c) => Boolean(c))
		.join(" ");
};

export const generateServerOrigin = () => {
	const { protocol, domain, port, apiPrefix } = config.server;
	let origin = `${protocol}://${domain}`;

	if (port) {
		origin = `${origin}:${port}`;
	}

	if (apiPrefix) {
		origin = `${origin}/${apiPrefix}`;
	}

	return origin;
};

export const getCookie = (key) => Cookies.get(key);
