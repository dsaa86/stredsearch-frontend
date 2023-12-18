import { render, fireEvent, screen } from "@testing-library/react";
import React from "react";
import StredSearch from "./StredSearch";

test("StredSearch renders child components", () => {
	const mockSetShowSO = jest.fn();
	const mockSetShowReddit = jest.fn();
	const mockSetSoSearchData = jest.fn();
	const mockSetRedditSearchData = jest.fn();
	const mockSetSoSearchResults = jest.fn();
	const mockSetRedditSearchResults = jest.fn();
	const mockSetSearchButtonActive = jest.fn();

	render(
		<StredSearch
			showReddit={false}
			setShowReddit={mockSetShowReddit}
			showSO={false}
			setShowSO={mockSetShowSO}
			soSearchData={{}}
			setSoSearchData={mockSetSoSearchData}
			redditSearchData={{}}
			setRedditSearchData={mockSetRedditSearchData}
			setSoSearchResults={mockSetSoSearchResults}
			setRedditSearchResults={mockSetRedditSearchResults}
			searchButtonActive={false}
			setSearchButtonActive={mockSetSearchButtonActive}
		/>,
	);

	expect(
		screen.getByText("Search Live Data on Stackoverflow and Reddit"),
	).toBeInTheDocument();
	expect(screen.getByText("Select Search Options")).toBeInTheDocument();
});

test("StredSearch handles SO and Reddit toggle", () => {
	const mockSetShowSO = jest.fn();
	const mockSetShowReddit = jest.fn();

	render(
		<StredSearch
			showReddit={false}
			setShowReddit={mockSetShowReddit}
			showSO={false}
			setShowSO={mockSetShowSO}
			soSearchData={{}}
			setSoSearchData={jest.fn()}
			redditSearchData={{}}
			setRedditSearchData={jest.fn()}
			setSoSearchResults={jest.fn()}
			setRedditSearchResults={jest.fn()}
			searchButtonActive={false}
			setSearchButtonActive={jest.fn()}
		/>,
	);

	fireEvent.click(screen.getByLabelText("Stack Overflow"));
	fireEvent.click(screen.getByLabelText("Reddit"));

	expect(mockSetShowSO).toHaveBeenCalled();
	expect(mockSetShowReddit).toHaveBeenCalled();
});
