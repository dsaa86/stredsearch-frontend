import findMissingParamsAndThrowError from "./FindMissingParamsAndThrowError";
import validateInputSubmissionSimple from "./ValidateInputSubmissionSimple";
import validateInputSubmissionRegExp from "./ValidateInputSubmissionRegExp";
import validateInputSubmissionIncludes from "./ValidateInputSubmissionIncludes";

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

export default validateInputSubmission;
