import buildAxiosPostData from "./BuildAxiosPostData";

describe("buildAxiosPostData", () => {
	it("should build an object from an array of arrays", () => {
		const data = [
			["key1", "value1"],
			["key2", "value2"],
		];
		const expected = { key1: "value1", key2: "value2" };
		expect(buildAxiosPostData(data)).toEqual(expected);
	});

	it("should return an empty object if the input is an empty array", () => {
		const data = [];
		const expected = {};
		expect(buildAxiosPostData(data)).toEqual(expected);
	});
});
