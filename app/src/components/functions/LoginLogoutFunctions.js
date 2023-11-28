import axios from "axios";

export const validateFormSubmission = (formState) => {
	let response = {
		error: {},
		valid: false,
	};
	// check if username is valid
	if (formState.register_username.length < 3) {
		response.error.username_minlength =
			"Username must be at least 3 characters long.";
	}
	if (formState.register_username.length > 20) {
		response.error.username_maxlength =
			"Username cannot be more than 20 characters long.";
	}
	const usernameRegex = /^[a-zA-Z0-9_]*$/;
	if (!usernameRegex.test(formState.register_username)) {
		response.error.username_format =
			"Username can only contain letters, numbers, and underscores.";
	}

	// check if email is valid
	const atSignPresent = formState.register_email.includes("@");
	if (!atSignPresent) {
		response.error.email_atpresent = "Email must contain an @ sign.";
	}
	const strAfterAt = formState.register_email.split("@")[1];
	// if there is no @ sign in the email address, strAfterAt will be undefined and an error will be returned - the try-catch block deals with this.
	try {
		const dotPresent = strAfterAt.includes(".");
		if (!dotPresent) {
			response.error.email_domainpresent =
				"Email must contain a fully qualified domain after the @ sign.";
		}
	} catch (error) {
		if (strAfterAt === undefined) {
			response.error.email_atpresent = "Email must contain an @ sign.";
		}
	}

	const strBeforeAt = formState.register_email.split("@")[0];
	const strBeforeAtRegex = /^[a-zA-Z0-9_]*$/;
	if (!strBeforeAtRegex.test(strBeforeAt)) {
		response.error.email_identifierformat =
			"Email must contain only letters, numbers, and underscores before the @ sign.";
	}
	// check if password is valid
	if (formState.register_password.length < 8) {
		response.error.password_minlength =
			"Password must be at least 8 characters long.";
	}
	if (formState.register_password.length > 30) {
		response.error.password_maxlength =
			"Password cannot be more than 20 characters long.";
	}
	const passwordAlphaNumericRegex = /^[a-zA-Z0-9_!£$%^&*(){}:;@~'#<>?,.]*$/;
	if (!passwordAlphaNumericRegex.test(formState.register_password)) {
		response.error.password_format =
			"Password can only contain letters, numbers, and the following special characters: !£$%^&*(){}:;@~'#<>?,.";
	}
	const passwordUpperCase = /[A-Z]/;
	if (!passwordUpperCase.test(formState.register_password)) {
		response.error.password_uppercase =
			"Password must contain at least one uppercase letter.";
	}
	const passwordLowerCase = /[a-z]/;
	if (!passwordLowerCase.test(formState.register_password)) {
		response.error.password_lowercase =
			"Password must contain at least one lowercase letter.";
	}
	const passwordNumber = /[0-9]/;
	if (!passwordNumber.test(formState.register_password)) {
		response.error.password_number =
			"Password must contain at least one number.";
	}
	const passwordSpecial = /[_!£$%&*(){}[\]:;@~'#<>?,.]/;
	if (!passwordSpecial.test(formState.register_password)) {
		response.error.password_special =
			"Password must contain at least one of the following special characters: _!£$%^&*(){}[]:;@~'#<>?,.";
	}

	// check if password_confirm is valid
	if (formState.register_password_confirm !== formState.register_password) {
		response.error.password_confirm = "Passwords must match.";
	}

	if (Object.keys(response.error).length === 0) {
		response.valid = true;
	}

	return response;
};

export const handleRegisterUserToStredSearch = (
	url,
	registerCancelToken,
	formState,
	headers,
) => {
	const postData = buildAxiosPostData([
		["username", formState.register_username],
		["email", formState.register_email],
		["password", formState.register_password],
		["password2", formState.register_password],
	]);

	const headerData = buildAxiosPostData(headers);

	return registerUserOnStredSearch(url, postData, headerData);
};

const registerUserOnStredSearch = async (url, data, headers) => {
	return await axios.post(url, data, headers);
};

export const handleUserLoginToStredSearch = (username, password) => {
	const url = "http://localhost:8000/api-token-auth/";

	const postData = buildAxiosPostData([
		["username", username],
		["password", password],
	]);

	const headerData = buildAxiosPostData([
		["Content-Type", "multipart/form-data"],
	]);

	return loginUserOnStredSearch(postData, headerData);
};

const loginUserOnStredSearch = async (url, data, headers) => {
	return await axios.post(url, data, headers);
};

const buildAxiosPostData = (data) => {
	let postData = {};

	data.forEach((datapoint) => {
		postData[datapoint[0]] = datapoint[1];
	});

	return postData;
};
