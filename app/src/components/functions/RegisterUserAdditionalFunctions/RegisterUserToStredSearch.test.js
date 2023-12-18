import axios from "axios";
import registerUserToStredSearch from "./RegisterUserToStredSearch";

jest.mock("axios");

describe("registerUserToStredSearch", () => {
	it("should register the user", async () => {
		const mockUrl = "http://test.com";
		const mockRegisterCancelToken = {};
		const mockFormState = {
			register_username: "testUser",
			register_email: "test@test.com",
			register_password: "testPassword",
		};
		const mockHeaders = [["Content-Type", "application/json"]];

		axios.post.mockResolvedValue({ data: {} });

		const result = await registerUserToStredSearch(
			mockUrl,
			mockRegisterCancelToken,
			mockFormState,
			mockHeaders,
		);

		expect(axios.post).toHaveBeenCalledWith(
			mockUrl,
			{
				username: mockFormState.register_username,
				email: mockFormState.register_email,
				password: mockFormState.register_password,
				password2: mockFormState.register_password,
			},
			{ "Content-Type": "application/json" },
		);
		expect(result).toEqual({ data: {} });
	});
});
