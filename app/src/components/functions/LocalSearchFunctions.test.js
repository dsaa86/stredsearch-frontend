import axios from "axios";
import { performLocalSearch } from "./LocalSearchFunctions";

jest.mock("axios");

describe("performLocalSearch", () => {
	beforeEach(() => {
		axios.get.mockResolvedValue({ data: {} });
	});

	it("should cancel ongoing requests and initiate new ones", () => {
		const mockCancelTokenSource = { cancel: jest.fn() };
		const mockSearchBoxValue = "test";
		const mockSetSoLocalSearchData = jest.fn();
		const mockSetRedditLocalSearchData = jest.fn();

		axios.CancelToken.source.mockReturnValue(mockCancelTokenSource);

		performLocalSearch(
			mockCancelTokenSource,
			mockCancelTokenSource,
			mockSearchBoxValue,
			mockSetSoLocalSearchData,
			mockSetRedditLocalSearchData,
		);

		expect(mockCancelTokenSource.cancel).toHaveBeenCalledTimes(2);
		expect(axios.CancelToken.source).toHaveBeenCalledTimes(2);
	});
});
