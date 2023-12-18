import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import handleGetUserDetailsFromServer from "./HandleGetUserDetailsFromServer";

describe("handleGetUserDetailsFromServer", () => {
	it("should make a GET request to the correct URL with the correct headers", async () => {
		const mock = new MockAdapter(axios);
		const data = { response: true };
		mock.onGet("http://localhost:8000/get-details/").reply(200, data);

		const token = "testToken";
		const response = await handleGetUserDetailsFromServer(token);

		expect(response.data).toEqual(data);
	});
});
