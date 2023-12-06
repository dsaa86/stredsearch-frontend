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

export default validateInputSubmissionIncludes;
