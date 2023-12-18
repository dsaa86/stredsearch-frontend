import axios from "axios";
import getSearchResultsForTermFromDB from "./GetSearchResultsForTermFromDB";

jest.mock("axios");

describe("getSearchResultsForTermFromDB", () => {
	it("should get search results for term from DB", async () => {
		const mockTerm = "testTerm";
		const mockLoginToken = "testToken";
		const mockUrl = `http://localhost:8000/searchhistory/retrieve-search-results/${mockLoginToken}/${mockTerm}/`;
		const mockResponse = { status: 200, data: {} };

		axios.get.mockResolvedValue(mockResponse);

		const result = await getSearchResultsForTermFromDB(
			mockTerm,
			mockLoginToken,
		);

		expect(axios.get).toHaveBeenCalledWith(mockUrl);
		expect(result).toEqual({ success: true, response: mockResponse.data });
	});

	it("should return success false when status is not 200", async () => {
		const mockTerm = "testTerm";
		const mockLoginToken = "testToken";
		const mockUrl = `http://localhost:8000/searchhistory/retrieve-search-results/${mockLoginToken}/${mockTerm}/`;
		const mockResponse = { status: 400, data: {} };

		axios.get.mockResolvedValue(mockResponse);

		const result = await getSearchResultsForTermFromDB(
			mockTerm,
			mockLoginToken,
		);

		expect(axios.get).toHaveBeenCalledWith(mockUrl);
		expect(result).toEqual({ success: false, response: mockResponse.data });
	});
});
