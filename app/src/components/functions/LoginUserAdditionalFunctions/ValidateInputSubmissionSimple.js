const validateInputSubmissionSimple = (params) => {
	// example:
	// params = {
	// 	input: val,
	// 	operator: ">",
	// 	value: 0,
	// 	error key: "username_minlength",
	// 	error message: "Username must be at least 3 characters long.",
	// }

	let response = {
		passed: false,
		error: {},
	};

	if (params.operator === ">") {
		if (params.input > params.value) {
			response.error[params.errorKey] = params.errorMessage;
		}
	} else if (params.operator === "<") {
		if (params.input < params.value) {
			response.error[params.errorKey] = params.errorMessage;
		}
	} else if (params.operator === ">=") {
		if (params.input >= params.value) {
			response.error[params.errorKey] = params.errorMessage;
		}
	} else if (params.operator === "<=") {
		if (params.input <= params.value) {
			response.error[params.errorKey] = params.errorMessage;
		}
	} else if (params.operator === "=") {
		if (params.input === params.value) {
			response.error[params.errorKey] = params.errorMessage;
		}
	} else if (params.operator === "!=") {
		if (params.input !== params.value) {
			response.error[params.errorKey] = params.errorMessage;
		}
	}

	if (Object.keys(response.error).length === 0) {
		response.passed = true;
	}

	return response;
};

export default validateInputSubmissionSimple;
