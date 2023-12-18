import findMissingParamsAndThrowError from "./FindMissingParamsAndThrowError";

describe("findMissingParamsAndThrowError", () => {
	it("should throw an error if a parameter is undefined", () => {
		const params = ["param1", undefined, "param3"];
		const message = "A parameter is missing";
		expect(() => findMissingParamsAndThrowError(params, message)).toThrow(
			message,
		);
	});

	it("should return true if all parameters are defined", () => {
		const params = ["param1", "param2", "param3"];
		const message = "A parameter is missing";
		expect(findMissingParamsAndThrowError(params, message)).toBe(true);
	});
});
