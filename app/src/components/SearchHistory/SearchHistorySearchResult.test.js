import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import SearchHistorySearchResult from "./SearchHistorySearchResult";
import openResultInNewWindow from "../functions/SearchHistoryAdditionalFunctions/OpenResultInNewWindow";

test("renders search history search result and tests title presence", () => {
	const destination = "reddit";
	const searchResult = {
		title: "Test Title",
		link: "https://www.google.com",
	};

	render(
		<SearchHistorySearchResult
			destination={destination}
			searchResult={searchResult}
		/>,
	);

	const titleElement = screen.getByText(searchResult.title);
	expect(titleElement).toBeInTheDocument();
});

jest.mock(
	"../functions/SearchHistoryAdditionalFunctions/OpenResultInNewWindow",
	() => jest.fn(),
);

test("renders search history search result and tests correct link fired on click", () => {
	const destination = "reddit";
	const searchResult = {
		title: "Test Title",
		link: "https://www.google.com",
	};

	const { getByText } = render(
		<SearchHistorySearchResult
			destination={destination}
			searchResult={searchResult}
		/>,
	);

	fireEvent.click(getByText(searchResult.title));
	expect(openResultInNewWindow).toHaveBeenCalledWith(searchResult.link);
	expect(openResultInNewWindow).toHaveBeenCalledTimes(1);
});
