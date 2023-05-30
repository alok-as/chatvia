import { useState, createContext, useContext } from "react";
import { getCookie } from "../utils";

const isAuthenticatedCookie = getCookie("isAuthenticated");
console.log("isAuthenticatedCookie", isAuthenticatedCookie);

const AuthContext = createContext({
	isAuthenticated: false,
	setIsAuthenticated: () => {},
});

const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(
		isAuthenticatedCookie ?? false
	);

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated,
				setIsAuthenticated,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error("Auth context is only accessible within Auth provider");
	}

	return context;
};

export default AuthProvider;
