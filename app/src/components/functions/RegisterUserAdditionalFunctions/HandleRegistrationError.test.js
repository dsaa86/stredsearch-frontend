import handleRegistrationError from "./HandleRegistrationError";
import handleLoginError from "../LoginUserAdditionalFunctions/HandleLoginError";

jest.mock("../LoginUserAdditionalFunctions/HandleLoginError");

describe("handleRegistrationError", () => {
	it("should handle a server error", () => {
		const mockSetFormInvalid = jest.fn();
		const error = {};

		handleRegistrationError(error, mockSetFormInvalid);

		expect(handleLoginError).toHaveBeenCalledWith(
			"servererror",
			"Bad server request. Try again later.",
			mockSetFormInvalid,
		);
	});

	it("should handle an existing user error", () => {
		const mockSetFormInvalid = jest.fn();
		const error = { response: { status: 409 } };

		handleRegistrationError(error, mockSetFormInvalid);

		expect(handleLoginError).toHaveBeenCalledWith(
			"existinguser",
			"Your username or email already exists. Please try again.",
			mockSetFormInvalid,
		);
	});
});
