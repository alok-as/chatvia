const useLogin = () => {
	const loginUserHandler = async (e) => {
		e.preventDefault();
		const targetForm = e.currentTarget;
		const formData = new FormData(targetForm);
		const userData = Object.fromEntries(formData.entries());

		console.log("userData", userData);
	};

	return { loginUserHandler };
};

export default useLogin;
