import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
dayjs.extend(isSameOrAfter);

import config from "../config";

export const combineClasses = (...classes) => {
	return classes
		.flat()
		.filter((c) => Boolean(c))
		.join(" ");
};

export const createAvatarPlaceholder = (name) => {
	return name.charAt(0).toUpperCase();
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

export const formatExpiryDate = (expiry) => {
	const [value, unit] = expiry.split(" ");
	const numValue = parseInt(value, 10);

	switch (unit) {
		case "day":
		case "days":
			return dayjs().add(numValue, "day");

		case "minute":
		case "minutes":
			return dayjs().add(numValue, "minute");

		case "second":
		case "seconds":
			return dayjs().add(numValue, "second");

		default:
			return dayjs().add(numValue, "day");
	}
};

export const setKeyInLocalStorage = (key, value, expiry) => {
	const data = {
		value,
		expiry: expiry ? formatExpiryDate(expiry) : undefined,
	};

	localStorage.setItem(key, JSON.stringify(data));
};

export const storeAuthTokens = (accessToken, refreshToken) => {
	const { accessExpiry, refreshExpiry } = config.security;

	setKeyInLocalStorage("accessToken", accessToken, accessExpiry);
	setKeyInLocalStorage("refreshToken", refreshToken, refreshExpiry);
};

export const getAuthTokens = () => {
	const accessToken = getKeyFromLocalStorage("accessToken");
	const refreshToken = getKeyFromLocalStorage("accessToken");
	return { accessToken, refreshToken };
};

export const checkIfLocalDataExpired = (key, expiry) => {
	if (!expiry) return false;

	const isExpired = dayjs().isSameOrAfter(dayjs(expiry));
	if (isExpired) removeKeyFromLocalStorage(key);
	return isExpired;
};

export const getKeyFromLocalStorage = (key, defaultValue = null) => {
	try {
		let localData;

		if (localStorage.getItem(key)) {
			const cacheData = JSON.parse(localStorage.getItem(key));

			if (cacheData.value) {
				const isExpired = checkIfLocalDataExpired(
					key,
					cacheData.expiry
				);

				localData = isExpired ? defaultValue : cacheData.value;
			} else {
				localData = defaultValue;
			}
		} else {
			localData = defaultValue;
		}

		return localData;
	} catch (error) {
		return defaultValue;
	}
};
