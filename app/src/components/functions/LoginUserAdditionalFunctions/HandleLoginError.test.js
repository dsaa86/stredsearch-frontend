import handleLoginError from "./HandleLoginError";

describe("handleLoginError", () => {
	it("should call setFormInvalid with the correct error message and category", () => {
		const mockSetFormInvalid = jest.fn();
		const errorCategory = "testCategory";
		const message = "testMessage";

		handleLoginError(errorCategory, message, mockSetFormInvalid);

		expect(mockSetFormInvalid).toHaveBeenCalledWith({
			error: { [errorCategory]: message },
			valid: false,
		});
	});
});
