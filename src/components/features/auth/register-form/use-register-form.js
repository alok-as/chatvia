import { toast } from "react-toastify";

import { useAuthStore } from "../../store/auth";
import { storeAuthTokens, storeUserProfile } from "../../../../utils";
import User from "../../../../services/user";

const useRegisterForm = () => {
	const setUserProfile = useAuthStore((state) => state.setUserProfile);

	const registerUserHandler = async (e) => {
		try {
			e.preventDefault();
			const targetForm = e.currentTarget;
			const formData = new FormData(targetForm);
			const userData = Object.fromEntries(formData.entries());

			const { data, message } = await User.register(userData);
			const { accessToken, refreshToken, profile } = data;

			storeAuthTokens(accessToken, refreshToken);
			storeUserProfile(profile);

			setUserProfile(profile);
			toast.success(message);
		} catch (error) {
			const message =
				error?.response?.data?.message || "Error registering user";
			toast.error(message);
		}
	};

	return { registerUserHandler };
};

export default useRegisterForm;
