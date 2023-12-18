import handleLoginError from "../LoginUserAdditionalFunctions/HandleLoginError";

const handleRegistrationError = (error, setFormInvalid) => {
	let errorCategory;
	let message;

	// check if username is valid
	if (error == {}) {
		errorCategory = "servererror";
		message = "Bad server request. Try again later.";
		handleLoginError(errorCategory, message, setFormInvalid);
		return;
	}
	if (error.response && error.response.status === 409) {
		errorCategory = "existinguser";
		message = "Your username or email already exists. Please try again.";
		handleLoginError(errorCategory, message, setFormInvalid);
		return;
	}
	if (error.response === undefined) {
		errorCategory = "servererror";
		message = "Bad server request. Try again later.";
		handleLoginError(errorCategory, message, setFormInvalid);
		return;
	}
	if (error.response.status === 409) {
		errorCategory = "existinguser";
		message = "Your username or email already exists. Please try again.";
		handleLoginError(errorCategory, message, setFormInvalid);
		return;
	} else {
		errorCategory = "servererror";
		message = "Bad server request. Try again later.";

		handleLoginError(errorCategory, message, setFormInvalid);
		return;
	}
	handleLoginError(errorCategory, message, setFormInvalid);
	return;
};

export default handleRegistrationError;
