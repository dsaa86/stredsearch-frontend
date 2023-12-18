import { render, screen } from "@testing-library/react";
import React from "react";
import SearchHistorySearchResultsContainer from "./SearchHistorySearchResultsContainer";

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

	render(
		<SearchHistorySearchResultsContainer
			searchHistoryController={searchHistoryController}
		/>,
	);

	const number_of_rows = document.querySelectorAll(
		".search-history-search-result",
	);
	expect(number_of_rows).toHaveLength(
		searchHistoryController.searchHistoryProcessedData.length,
	);
});

test("renders search history container and tests titles rendered to screen", () => {
	const searchHistoryController = {
		searchHistoryProcessedData: [
			{
				title: "Test Reddit Title",
				link: "https://www.reddit.com",
			},
			{
				title: "Test Stack Title",
				link: "https://www.stackoverflow.com",
			},
		],
	};

	render(
		<SearchHistorySearchResultsContainer
			searchHistoryController={searchHistoryController}
		/>,
	);

	searchHistoryController.searchHistoryProcessedData.forEach((data) => {
		const title_element = screen.getByText(data.title);
		expect(title_element).toBeInTheDocument();
	});
});
