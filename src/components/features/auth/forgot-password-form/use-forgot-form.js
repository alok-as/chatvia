const useForgotForm = () => {
	const forgotPasswordHandler = async (e) => {
		e.preventDefault();
		const targetForm = e.currentTarget;
		const formData = new FormData(targetForm);
		const userData = Object.fromEntries(formData.entries());
	};

	return { forgotPasswordHandler };
};

export default useForgotForm;
