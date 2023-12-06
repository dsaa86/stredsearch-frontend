const findMissingParamsAndThrowError = (paramList, message) => {
	paramList.forEach((param) => {
		if (param === undefined) {
			throw new Error(message);
		}
	});
	return true;
};

export default findMissingParamsAndThrowError;
