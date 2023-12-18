import { render, screen } from "@testing-library/react";
import React from "react";
import StackSearchResultsContainer from "./StackSearchResultsContainer";

jest.mock(
	"./custom-hooks/StackSearch-Reddit-ResultsContainer/UseLoadingAnimation",
	() => ({
		__esModule: true,
		default: () => ({
			showLoadingAnimation: false,
			searchResults: [
				{
					question_id: 1,
					link: "https://stackoverflow.com/questions/1",
				},
				{
					question_id: 2,
					link: "https://stackoverflow.com/questions/2",
				},
			],
		}),
	}),
);

jest.mock("./generic-components/LoadingAnimationContainer", () => {
	return function MockedLoadingAnimationContainer() {
		return <div data-testid="loading-animation" />;
	};
});

jest.mock(
	"./custom-hooks/StackSearch-Reddit-ResultsContainer/UseLoadingAnimation",
	() => ({
		__esModule: true,
		default: () => ({
			showLoadingAnimation: false,
			searchResults: [
				{
					question_id: 1,
					link: "https://stackoverflow.com/questions/1",
					tags: "tag1, tag2",
				},
				{
					question_id: 2,
					link: "https://stackoverflow.com/questions/2",
					tags: "tag3, tag4",
				},
			],
		}),
	}),
);

test("StackSearchResultsContainer renders child components", () => {
	render(
		<StackSearchResultsContainer
			soSearchResults={[]}
			setSearchButtonActive={jest.fn()}
			searchButtonActive={false}
		/>,
	);

	expect(screen.getByText("Stack Overflow Results")).toBeInTheDocument();
	expect(screen.getAllByText(/Created/).length).toBe(2);
});

test("StackSearchResultsContainer shows loading animation", () => {
	const useLoadingAnimation = require("./custom-hooks/StackSearch-Reddit-ResultsContainer/UseLoadingAnimation");

	useLoadingAnimation.default = jest.fn(() => ({
		showLoadingAnimation: true,
		searchResults: [],
	}));

	render(
		<StackSearchResultsContainer
			soSearchResults={[]}
			setSearchButtonActive={jest.fn()}
			searchButtonActive={false}
		/>,
	);

	expect(screen.getByTestId("loading-animation")).toBeInTheDocument();
});
