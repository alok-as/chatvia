const useRegister = () => {
	const registerUserHandler = async (e) => {
		e.preventDefault();
		const targetForm = e.currentTarget;
		const formData = new FormData(targetForm);
		const userData = Object.fromEntries(formData.entries());

		console.log("userData", userData);
	};

	return { registerUserHandler };
};

export default useRegister;
