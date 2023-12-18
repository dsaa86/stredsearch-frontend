import setTokenSessionVariable from "./SetTokenSessionVariable";

describe("setTokenSessionVariable", () => {
	it("should set the session storage and call the provided functions with the correct arguments", () => {
		const mockSetLoginStatus = jest.fn();
		const mockSetFormVisible = jest.fn();
		const token = "testToken";

		Object.defineProperty(window, "sessionStorage", {
			value: {
				setItem: jest.fn(),
			},
			writable: true,
		});

		const result = setTokenSessionVariable(
			token,
			mockSetLoginStatus,
			mockSetFormVisible,
		);

		expect(window.sessionStorage.setItem).toHaveBeenCalledWith(
			"token",
			token,
		);
		expect(mockSetLoginStatus).toHaveBeenCalledWith(true);
		expect(mockSetFormVisible).toHaveBeenCalledWith(false);
		expect(result).toBe(true);
	});
});
