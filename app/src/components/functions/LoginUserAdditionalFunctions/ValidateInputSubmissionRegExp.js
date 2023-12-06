const validateInputSubmissionRegExp = (params) => {
	// example:
	// params = {
	// 	input: val,
	// 	regexp: "",
	// 	error key: "username_minlength",
	// 	error message: "Username must be at least 3 characters long.",
	// }

	let response = {
		passed: false,
		error: {},
	};

	if (!params.regexp.test(params.input)) {
		response.error[params.errorKey] = params.errorMessage;
		return response;
	}

	response.passed = true;
	return response;
};

export default validateInputSubmissionRegExp;
