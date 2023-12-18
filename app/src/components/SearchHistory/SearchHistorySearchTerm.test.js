import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import SearchHistorySearchTerm from "./SearchHistorySearchTerm";
import retrieveSearchResultsForTerm from "../functions/SearchHistoryAdditionalFunctions/RetrieveSearchResultsForTerm";

test("renders search history container and tests number of elements rendered", () => {
	const searchHistoryController = {
		searchHistoryProcessedData: [
			{
				title: "Test Reddit Title",
				link: "https://www.reddit.com",
			},
			{
				title: "Test Stack Title",
				link: "https://www.stack.com",
			},
		],
	};

	const term = "Test Term";
	const token = "a5872fhj4568w21cgj832l09iuhg4sx1";

	render(
		<SearchHistorySearchTerm
			searchHistoryController={searchHistoryController}
			term={term}
			token={token}
		/>,
	);

	const searchTerm = screen.getByText(term);
	expect(searchTerm).toBeInTheDocument();
});

jest.mock(
	"../functions/SearchHistoryAdditionalFunctions/RetrieveSearchResultsForTerm",
	() => jest.fn(),
);

test("renders search history search result and tests correct link fired on click", () => {
	const searchHistoryController = {
		searchHistoryProcessedData: [
			{
				title: "Test Term",
				link: "https://www.reddit.com",
			},
			{
				title: "Test Stack Title",
				link: "https://www.stack.com",
			},
		],
	};

	const term = "Test Term";
	const token = "a5872fhj4568w21cgj832l09iuhg4sx1";

	const { getByText } = render(
		<SearchHistorySearchTerm
			searchHistoryController={searchHistoryController}
			term={term}
			token={token}
		/>,
	);

	fireEvent.click(
		getByText(searchHistoryController.searchHistoryProcessedData[0].title),
	);
	expect(retrieveSearchResultsForTerm).toHaveBeenCalledWith(
		searchHistoryController,
		term,
		token,
	);
	expect(retrieveSearchResultsForTerm).toHaveBeenCalledTimes(1);
});
