import { toast } from "react-toastify";

import User from "../../services/user";
import { useAuthStore } from "../../store/auth";

const useRegister = () => {
	const setIsAuthenticated = useAuthStore(
		(state) => state.setIsAuthenticated
	);

	const registerUserHandler = async (e) => {
		try {
			e.preventDefault();
			const targetForm = e.currentTarget;
			const formData = new FormData(targetForm);
			const userData = Object.fromEntries(formData.entries());

			const { data, message } = await User.register(userData);
			const { accessToken, refreshToken } = data;
			storeAuthTokens(accessToken, refreshToken);

			setIsAuthenticated(true);
			toast.success(message);
		} catch (error) {
			console.log("Error registering user", error);
			toast.error("Error registering user");
		}
	};

	return { registerUserHandler };
};

export default useRegister;
