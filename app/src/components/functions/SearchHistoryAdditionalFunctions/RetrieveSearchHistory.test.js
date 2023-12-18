import axios from "axios";
import retrieveSearchHistory from "./RetrieveSearchHistory";

jest.mock("axios");

describe("retrieveSearchHistory", () => {
	it("should retrieve search history", async () => {
		const mockLoginToken = "testToken";
		const mockUrl = `http://localhost:8000/searchhistory/${mockLoginToken}/`;
		const mockResponse = { status: 200, data: {} };

		axios.get.mockResolvedValue(mockResponse);
		sessionStorage.setItem("token", mockLoginToken);

		const result = await retrieveSearchHistory();

		expect(axios.get).toHaveBeenCalledWith(mockUrl);
		expect(result).toEqual({ success: true, response: mockResponse.data });
	});

	it("should return success false when status is not 200", async () => {
		const mockLoginToken = "testToken";
		const mockUrl = `http://localhost:8000/searchhistory/${mockLoginToken}/`;
		const mockResponse = { status: 400, data: {} };

		axios.get.mockResolvedValue(mockResponse);
		sessionStorage.setItem("token", mockLoginToken);

		const result = await retrieveSearchHistory();

		expect(axios.get).toHaveBeenCalledWith(mockUrl);
		expect(result).toEqual({ success: false, response: mockResponse.data });
	});
});
