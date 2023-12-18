import { render, screen } from "@testing-library/react";
import React from "react";
import SearchHistorySearchResultRow from "./SearchHistorySearchResultRow";

test("renders search history search result row and tests stackoverflow param", () => {
	const searchResult = {
		title: "Test Stackoverflow Title",
		link: "https://www.stackoverflow.com",
	};

	render(<SearchHistorySearchResultRow searchResult={searchResult} />);

	const titleElement = screen.getByText(searchResult.title);
	expect(titleElement).toBeInTheDocument();
});

test("renders search history search result row and tests reddit param", () => {
	const searchResult = {
		title: "Test Reddit Title",
		link: "https://www.reddit.com",
	};

	render(<SearchHistorySearchResultRow searchResult={searchResult} />);

	const titleElement = screen.getByText(searchResult.title);
	expect(titleElement).toBeInTheDocument();
});
