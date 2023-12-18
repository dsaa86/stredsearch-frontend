import { render, screen } from "@testing-library/react";
import React from "react";
import RedditSearchResultsContainer from "./RedditSearchResultsContainer";

jest.mock(
	"./custom-hooks/StackSearch-Reddit-ResultsContainer/UseLoadingAnimation",
	() => ({
		__esModule: true,
		default: () => ({
			showLoadingAnimation: false,
			searchResults: [{ question_id: 1 }, { question_id: 2 }],
		}),
	}),
);

jest.mock("react-lottie", () => {
	return function DummyLottie() {
		return <div />;
	};
});

jest.mock("./generic-components/LoadingAnimation", () => {
	return function MockedLoadingAnimation() {
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
					question_title: "Question 1",
					question_link:
						"https://www.reddit.com/r/subreddit1/question1",
				},
				{
					question_id: 2,
					question_title: "Question 2",
					question_link:
						"https://www.reddit.com/r/subreddit2/question2",
				},
			],
		}),
	}),
);

test("RedditSearchResultsContainer renders child components", () => {
	render(
		<RedditSearchResultsContainer
			redditSearchResults={[]}
			setSearchButtonActive={jest.fn()}
			searchButtonActive={false}
		/>,
	);

	expect(screen.getByText("Reddit Results")).toBeInTheDocument();
	expect(screen.getAllByText(/Question/).length).toBe(2);
});

test("RedditSearchResultsContainer shows loading animation", () => {
	const useLoadingAnimation = require("./custom-hooks/StackSearch-Reddit-ResultsContainer/UseLoadingAnimation");

	useLoadingAnimation.default = jest.fn(() => ({
		showLoadingAnimation: true,
		searchResults: [],
	}));

	render(
		<RedditSearchResultsContainer
			redditSearchResults={[]}
			setSearchButtonActive={jest.fn()}
			searchButtonActive={false}
		/>,
	);

	expect(screen.getByTestId("loading-animation")).toBeInTheDocument();
});
