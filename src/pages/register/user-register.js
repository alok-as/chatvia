import { toast } from "react-toastify";

import User from "../../services/user";
import { useAuth } from "../../contexts/auth";

const useRegister = () => {
	const { setIsAuthenticated } = useAuth();

	const registerUserHandler = async (e) => {
		try {
			e.preventDefault();
			const targetForm = e.currentTarget;
			const formData = new FormData(targetForm);
			const userData = Object.fromEntries(formData.entries());

			await User.register(userData);
			setIsAuthenticated(true);

			toast.success("User logged in!");
		} catch (error) {
			console.log("Error registering user", error);
			toast.error("Error logging in user!");
		}
	};

	return { registerUserHandler };
};

export default useRegister;
