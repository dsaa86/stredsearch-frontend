import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import handleUserLoginToStredSearch from "./HandleUserLoginToStredSearch";

describe("handleUserLoginToStredSearch", () => {
	it("should make a POST request to the correct URL with the correct data and headers", async () => {
		const mock = new MockAdapter(axios);
		const data = { response: true };
		mock.onPost("http://localhost:8000/api-token-auth/").reply(200, data);

		const username = "testUser";
		const password = "testPassword";
		const cancelToken = axios.CancelToken.source();
		const response = await handleUserLoginToStredSearch(
			username,
			password,
			cancelToken,
		);

		expect(response.data).toEqual(data);
	});
});
