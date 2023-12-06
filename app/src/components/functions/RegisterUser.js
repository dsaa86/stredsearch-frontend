import axios from "axios";
import handleRegistrationError from "./RegisterUserAdditionalFunctions/HandleRegistrationError";
import initiateLogin from "./RegisterUserAdditionalFunctions/InitiateLogin";
import registerUserToStredSearch from "./RegisterUserAdditionalFunctions/RegisterUserToStredSearch";
import validateUserRegistrationForm from "./RegisterUserAdditionalFunctions/ValidateUserRegistrationForm";

const registerUser = (
	useRegisterForm,
	registerCancelToken,
	loginCancelToken,
) => {
	useRegisterForm.setFormInvalid({
		error: {
			blank: "",
		},
		valid: true,
		attempt: useRegisterForm.formInvalid.attempt + 1,
	});

	if (!validateUserRegistrationForm(useRegisterForm)) {
		return;
	}

	//user has interrupted the process - belt and braces as UI button is locked during registration request
	if (registerCancelToken) {
		registerCancelToken.cancel("Operation canceled by the user.");
	}

	registerCancelToken = axios.CancelToken.source();

	const url = "http://localhost:8000/register/";

	const registrationHeaders = [
		["Content-Type", "multipart/form-data"],
		["cancelToken", registerCancelToken.token],
	];

	registerUserToStredSearch(
		url,
		registerCancelToken,
		useRegisterForm.formState,
		registrationHeaders,
	)
		.then((response) => {
			//user successfully registered
			//now to log them in seamlessly
			initiateLogin(
				loginCancelToken,
				response.data.username,
				useRegisterForm.formState.register_password,
				useRegisterForm.setLoginStatus,
				useRegisterForm.setShowRegisterForm,
				useRegisterForm.setFormInvalid,
				useRegisterForm.setUserDetails,
				useRegisterForm.userDetails,
			);
		})
		.catch((error) => {
			handleRegistrationError(error, useRegisterForm.setFormInvalid);
		});
};

export default registerUser;
