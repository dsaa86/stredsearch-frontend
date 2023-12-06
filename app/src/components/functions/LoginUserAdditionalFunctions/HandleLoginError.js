const handleLoginError = (errorCategory, message, setFormInvalid) => {
	// user has not been registered successfully, identify cause and inform user
	let response = {
		error: {},
		valid: false,
	};
	response.error[errorCategory] = message;
	setFormInvalid(response);
	return;
};

export default handleLoginError;
