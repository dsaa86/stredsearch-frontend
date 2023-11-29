import axios from "axios";

const findMissingParamsAndThrowError = (paramList, message) => {
	paramList.forEach((param) => {
		if (param === undefined) {
			throw new Error(message);
		}
	});
	return true;
};

const validateInputSubmission = (params) => {
	// params structure differs based on type selected
	let response;
	if (params.type === "simple") {
		findMissingParamsAndThrowError(
			[
				params.input,
				params.operator,
				params.value,
				params.errorKey,
				params.errorMessage,
			],
			"Missing parameters for validation type 'simple'. Params should be: input, operator, value, errorKey, errorMessage.",
		);
		response = validateInputSubmissionSimple(params);
	} else if (params.type === "regexp") {
		findMissingParamsAndThrowError(
			[params.input, params.regexp, params.errorKey, params.errorMessage],
			"Missing parameters for validation type 'regexp'. Params should be: input, regexp, errorKey, errorMessage.",
		);
		response = validateInputSubmissionRegExp(params);
	} else if (params.type === "includes") {
		findMissingParamsAndThrowError(
			[
				params.input,
				params.includes,
				params.errorKey,
				params.errorMessage,
			],
			"Missing parameters for validation type 'includes'. Params should be: input, includes, errorKey, errorMessage.",
		);
		response = validateInputSubmissionIncludes(params);
	}
	return response;
};

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

const validateInputSubmissionIncludes = (params) => {
	// example:
	// params = {
	// 	input: val,
	// 	includes: ">"
	// 	error key: "username_minlength",
	// 	error message: "Username must be at least 3 characters long.",
	// }

	let response = {
		passed: false,
		error: {},
	};

	//catch an edge case for email addresses
	if (typeof params.includes === "object") {
		console.log(params.includes);
		const strAfterAt = params.input.split(params.includes[0])[1];
		console.log(strAfterAt);
		try {
			const dotPresent = strAfterAt.includes(params.includes[1]);
			console.log(dotPresent);
			if (!dotPresent) {
				response.error[params.errorKey] = params.errorMessage;
				return response;
			}
		} catch (error) {
			if (strAfterAt === undefined) {
				response.error["email_atpresent"] =
					"Email must contain an @ sign.";
				return response;
			}
		}
		response.passed = true;
		return response;
	}

	if (!params.input.includes(params.includes)) {
		response.error[params.errorKey] = params.errorMessage;
		return response;
	}

	response.passed = true;
	return response;
};

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

	return registerUserOnStredSearchAsync(url, postData, headerData);
};

const registerUserOnStredSearchAsync = async (url, data, headers) => {
	return await axios.post(url, data, headers);
};

export const handleUserLoginToStredSearch = (
	username,
	password,
	cancelToken,
) => {
	const url = "http://localhost:8000/api-token-auth/";

	const postData = buildAxiosPostData([
		["username", username],
		["password", password],
	]);

	const headerData = buildAxiosPostData([
		["Content-Type", "multipart/form-data"],
	]);

	return loginUserOnStredSearchAsync(url, postData, headerData, cancelToken);
};

const loginUserOnStredSearchAsync = async (url, data, headers, cancelToken) => {
	return await axios.post(url, data, {
		headers,
		cancelToken: cancelToken.token,
	});
};

export const handleGetUserDetailsFromServer = (token) => {
	const url = "http://localhost:8000/get-details/";
	const headers = {
		Authorization: `Token ${token}`,
	};

	return getUserDetailsFromServerAsync(url, headers);
};

const getUserDetailsFromServerAsync = async (url, headers) => {
	return await axios.get(url, { headers });
};

const buildAxiosPostData = (data) => {
	let postData = {};

	data.forEach((datapoint) => {
		postData[datapoint[0]] = datapoint[1];
	});

	return postData;
};
