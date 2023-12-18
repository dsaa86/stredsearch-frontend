import retrieveSearchHistory from "../functions/SearchHistoryAdditionalFunctions/RetrieveSearchHistory";
import showSearchHistory from "./SearchHistoryFunctions";

jest.mock(
	"../functions/SearchHistoryAdditionalFunctions/RetrieveSearchHistory",
);

describe("showSearchHistory", () => {
	let authController;
	let searchHistoryController;

	beforeEach(() => {
		authController = {
			loginStatus: true,
			setShowSearchHistory: jest.fn(),
		};
		searchHistoryController = {
			setSearchHistory: jest.fn(),
		};
		sessionStorage.setItem("token", "testToken");
	});

	afterEach(() => {
		sessionStorage.clear();
	});

	it("should not fetch search history if user is not logged in", () => {
		authController.loginStatus = false;
		showSearchHistory(authController, searchHistoryController);
		expect(retrieveSearchHistory).not.toHaveBeenCalled();
	});

	it("should return an error if no token is found", () => {
		sessionStorage.removeItem("token");
		const result = showSearchHistory(
			authController,
			searchHistoryController,
		);
		expect(result).toEqual({ success: false, response: "No token found." });
	});

	it("should fetch search history if user is logged in and token is found", () => {
		const mockResponse = { response: "testResponse" };
		retrieveSearchHistory.mockResolvedValue(mockResponse);
		showSearchHistory(authController, searchHistoryController);
		expect(retrieveSearchHistory).toHaveBeenCalled();
	});

	it("should set search history and show search history if fetch is successful", async () => {
		const mockResponse = { response: "testResponse" };
		retrieveSearchHistory.mockResolvedValue(mockResponse);
		await showSearchHistory(authController, searchHistoryController);
		expect(searchHistoryController.setSearchHistory).toHaveBeenCalledWith(
			mockResponse.response,
		);
		expect(authController.setShowSearchHistory).toHaveBeenCalledWith(true);
	});

	it("should handle error if fetch fails", async () => {
		const mockError = new Error("testError");
		retrieveSearchHistory.mockRejectedValue(mockError);
		global.console = { log: jest.fn() };
		try {
			await showSearchHistory(authController, searchHistoryController);
		} catch (error) {
			expect(global.console.log).toHaveBeenCalledWith(mockError);
		}
	});
});
