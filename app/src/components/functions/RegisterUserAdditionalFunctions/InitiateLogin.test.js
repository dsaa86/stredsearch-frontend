import axios from "axios";
import initiateLogin from "./InitiateLogin";
import handleUserLoginToStredSearch from "../LoginUserAdditionalFunctions/HandleUserLoginToStredSearch";
import setTokenSessionVariable from "../LoginUserAdditionalFunctions/SetTokenSessionVariable";
import handleGetUserDetailsFromServer from "../LoginUserAdditionalFunctions/HandleGetUserDetailsFromServer";
import handleLoginError from "../LoginUserAdditionalFunctions/HandleLoginError";

jest.mock("axios");
jest.mock("../LoginUserAdditionalFunctions/HandleUserLoginToStredSearch");
jest.mock("../LoginUserAdditionalFunctions/SetTokenSessionVariable");
jest.mock("../LoginUserAdditionalFunctions/HandleGetUserDetailsFromServer");
jest.mock("../LoginUserAdditionalFunctions/HandleLoginError");

describe("initiateLogin", () => {
	it("should initiate the login process", async () => {
		const mockSetLoginStatus = jest.fn();
		const mockSetShowRegisterForm = jest.fn();
		const mockSetFormInvalid = jest.fn();
		const mockSetUserDetails = jest.fn();
		const mockCancelToken = { cancel: jest.fn() };

		Object.defineProperty(window, "sessionStorage", {
			value: {
				getItem: jest.fn(() => "testToken"),
			},
			writable: "f98f7qqw54lg457896324578452123f1",
		});

		axios.CancelToken.source.mockReturnValue(mockCancelToken);
		handleUserLoginToStredSearch.mockResolvedValue({
			data: { token: "testToken" },
		});
		handleGetUserDetailsFromServer.mockResolvedValue({
			data: { username: "testUser" },
		});

		await initiateLogin(
			mockCancelToken,
			"testUser",
			"testPassword",
			mockSetLoginStatus,
			mockSetShowRegisterForm,
			mockSetFormInvalid,
			mockSetUserDetails,
			{},
		);

		expect(mockCancelToken.cancel).toHaveBeenCalledWith(
			"Operation canceled by the user.",
		);
		expect(handleUserLoginToStredSearch).toHaveBeenCalledWith(
			"testUser",
			"testPassword",
			mockCancelToken,
		);
		expect(setTokenSessionVariable).toHaveBeenCalledWith(
			"testToken",
			mockSetLoginStatus,
			mockSetShowRegisterForm,
		);
	});
});
