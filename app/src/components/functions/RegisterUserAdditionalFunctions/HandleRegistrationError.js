import handleLoginError from "../LoginUserAdditionalFunctions/HandleLoginError";

const handleRegistrationError = (error, setFormInvalid) => {
	let errorCategory;
	let message;

	// check if username is valid
	if (error.response === undefined) {
		errorCategory = "servererror";
		message = "Bad server request. Try again later.";
	}
	if (error.response.status === 409) {
		errorCategory = "existinguser";
		message = "Your username or email already exists. Please try again.";
	} else {
		errorCategory = "servererror";
		message = "Bad server request. Try again later.";
	}
	handleLoginError(errorCategory, message, setFormInvalid);
	return;
};

export default handleRegistrationError;
