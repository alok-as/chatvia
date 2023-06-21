import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isYesterday from "dayjs/plugin/isYesterday";

import config from "../config";

dayjs.extend(isSameOrAfter);
dayjs.extend(isYesterday);

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
	const { protocol, domain, port } = config.server;
	let origin = `${protocol}://${domain}`;

	if (port) {
		origin = `${origin}:${port}`;
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

export const removeKeyFromLocalStorage = (key) => {
	localStorage.removeItem(key);
};

export const storeUserProfile = (profile) => {
	const { refreshExpiry } = config.security;
	setKeyInLocalStorage("profile", profile, refreshExpiry);
};

export const removeAuthTokens = () => {
	removeKeyFromLocalStorage("accessToken");
	removeKeyFromLocalStorage("refreshToken");
	removeKeyFromLocalStorage("profile");
};

export const getAuthTokens = () => {
	const accessToken = getKeyFromLocalStorage("accessToken");
	const refreshToken = getKeyFromLocalStorage("refreshToken");
	return { accessToken, refreshToken };
};

export const getUserProfile = () => {
	const profile = getKeyFromLocalStorage("profile");
	return profile;
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

export const getRootFontValue = () =>
	parseFloat(getComputedStyle(document.documentElement).fontSize);

export const formatTimestamp = (timestamp, options) => {
	if (options?.isFullForm) {
		return dayjs(timestamp).format("DD MMM YY, h:mm A");
	}

	if (dayjs().isSame(timestamp, "day")) {
		return dayjs(timestamp).format("h:mm A");
	}

	if (dayjs(timestamp).isYesterday()) {
		return "Yesterday";
	}

	return dayjs(timestamp).format("DD/MM/YYYY");
};

export const isUserOnline = (onlineUsers, userId) => {
	if (!onlineUsers) return false;
	return Object.values(onlineUsers).includes(userId);
};

export const getUserSelectedTheme = () => getKeyFromLocalStorage("theme");
