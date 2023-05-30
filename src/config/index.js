const config = {
	server: {
		protocol: import.meta.env.VITE_SERVER_PROTOCOL,
		domain: import.meta.env.VITE_SERVER_DOMAIN,
		port: import.meta.env.VITE_SERVER_PORT,
		apiPrefix: import.meta.env.VITE_SERVER_API_PREFIX,
	},
};

export default config;
