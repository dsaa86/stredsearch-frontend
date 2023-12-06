import validateInputSubmission from "./ValidateInputSubmission";

export const validateFormSubmission = (validationTests) => {
	// example: validationTests = [
	// 	{
	// 		type: "simple",
	// 		input: formState.register_username.length,
	// 		operator: ">",
	// 		value: 3,
	// 		errorKey: "username_minlength",
	// 		errorMessage: "Username must be at least 3 characters long.",
	// 	}, {
	// 		type: "regexp",
	// 		input: formState.register_email,
	// 		regexp: /^[a-zA-Z0-9_]*$/,
	// 		errorKey: "username_format",
	// 		errorMessage: "Username can only contain letters, numbers, and underscores.",
	// 	}, {
	// 		type: "includes",
	// 		input: formState.register_email,
	// 		includes: "@",
	// 		errorKey: "email_atpresent",
	// 		errorMessage: "Email must contain an @ sign.",
	// 	}
	// ];

	let response = {
		error: {},
		valid: false,
	};

	validationTests.forEach((test) => {
		const validationResult = validateInputSubmission(test);

		if (!validationResult.passed) {
			response.error = { ...response.error, ...validationResult.error };
		}
	});

	if (Object.keys(response.error).length === 0) {
		response.valid = true;
	}

	return response;
};

export default validateFormSubmission;
