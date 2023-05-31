import { toast } from "react-toastify";

import User from "../../services/user";
import { useAuthStore } from "../../store/auth";
import { storeAuthTokens } from "../../utils";

const useLogin = () => {
	const setIsAuthenticated = useAuthStore(
		(state) => state.setIsAuthenticated
	);

	const loginUserHandler = async (e) => {
		try {
			e.preventDefault();
			const targetForm = e.currentTarget;
			const formData = new FormData(targetForm);
			const userData = Object.fromEntries(formData.entries());

			const { data, message } = await User.login({
				usernameOrEmail: userData.username,
				password: userData.password,
			});

			const { accessToken, refreshToken } = data;
			storeAuthTokens(accessToken, refreshToken);

			setIsAuthenticated(true);
			toast.success(message);
		} catch (error) {
			console.log("Error logging in user!", error);
			toast.error("Error logging in user!");
		}
	};

	return { loginUserHandler };
};

export default useLogin;
