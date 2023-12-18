import addTokenToSoSearchData from "./AddTokenToSoSearchData";

describe("addTokenToSoSearchData", () => {
	it("should add token to soSearchData when token is in sessionStorage", () => {
		const setSoSearchData = jest.fn();
		const soSearchData = { otherKey: "otherValue" };
		const mockToken = "testToken";

		sessionStorage.setItem("token", mockToken);

		addTokenToSoSearchData(setSoSearchData, soSearchData);

		expect(setSoSearchData).toHaveBeenCalledWith({
			...soSearchData,
			token: mockToken,
		});
	});

	it("should add empty string to soSearchData when token is not in sessionStorage", () => {
		const setSoSearchData = jest.fn();
		const soSearchData = { otherKey: "otherValue" };

		sessionStorage.removeItem("token");

		addTokenToSoSearchData(setSoSearchData, soSearchData);

		expect(setSoSearchData).toHaveBeenCalledWith({
			...soSearchData,
			token: "",
		});
	});
});
