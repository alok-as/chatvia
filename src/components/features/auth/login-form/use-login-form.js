import { toast } from "react-toastify";

import User from "../../../../services/user";
import { useAuthStore } from "../../store/auth";
import { storeAuthTokens, storeUserProfile } from "../../../../utils";

const useLoginForm = () => {
	const setUserProfile = useAuthStore((state) => state.setUserProfile);

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

			const { accessToken, refreshToken, profile } = data;
			storeAuthTokens(accessToken, refreshToken);
			storeUserProfile(profile);

			setUserProfile(profile);
			toast.success(message);
		} catch (error) {
			console.log("Error logging in user!", error);
			toast.error("Error logging in user!");
		}
	};

	return { loginUserHandler };
};

export default useLoginForm;
