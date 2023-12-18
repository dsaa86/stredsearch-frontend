import axios from "axios";
import loginUser from "./LoginUser";
import handleGetUserDetailsFromServer from "./LoginUserAdditionalFunctions/HandleGetUserDetailsFromServer";
import handleUserLoginToStredSearch from "./LoginUserAdditionalFunctions/HandleUserLoginToStredSearch";
import setTokenSessionVariable from "./LoginUserAdditionalFunctions/SetTokenSessionVariable";

jest.mock("axios");
jest.mock("./LoginUserAdditionalFunctions/HandleUserLoginToStredSearch");
jest.mock("./LoginUserAdditionalFunctions/HandleGetUserDetailsFromServer");
jest.mock("./LoginUserAdditionalFunctions/SetTokenSessionVariable");
jest.mock("./LoginUserAdditionalFunctions/HandleLoginError");

describe("loginUser", () => {
	it("should handle user login", async () => {
		const mockLoginCancelToken = { cancel: jest.fn() };
		const mockUsername = "test";
		const mockPassword = "password";
		const mockSetLoginStatus = jest.fn();
		const mockSetShowLoginForm = jest.fn();
		const mockSetUserDetails = jest.fn();
		const mockSetFormInvalid = jest.fn();

		axios.CancelToken.source.mockReturnValue(mockLoginCancelToken);
		handleUserLoginToStredSearch.mockResolvedValue({
			data: { token: "token" },
		});
		handleGetUserDetailsFromServer.mockResolvedValue({
			data: { username: "test" },
		});

		await loginUser(
			mockLoginCancelToken,
			mockUsername,
			mockPassword,
			mockSetLoginStatus,
			mockSetShowLoginForm,
			mockSetUserDetails,
			mockSetFormInvalid,
		);

		expect(mockLoginCancelToken.cancel).toHaveBeenCalled();
		expect(axios.CancelToken.source).toHaveBeenCalled();
		expect(handleUserLoginToStredSearch).toHaveBeenCalledWith(
			mockUsername,
			mockPassword,
			mockLoginCancelToken,
		);
		expect(setTokenSessionVariable).toHaveBeenCalled();
		expect(handleGetUserDetailsFromServer).toHaveBeenCalled();
	});
});
