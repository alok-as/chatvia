const config = {
	server: {
		protocol: import.meta.env.VITE_SERVER_PROTOCOL,
		domain: import.meta.env.VITE_SERVER_DOMAIN,
		port: import.meta.env.VITE_SERVER_PORT,
		apiPrefix: import.meta.env.VITE_SERVER_API_PREFIX,
	},
	security: {
		accessExpiry: import.meta.env.VITE_ACCESS_TOKEN_EXPIRATION,
		refreshExpiry: import.meta.env.VITE_REFRESH_TOKEN_EXPIRATION,
	},
};

export default config;
