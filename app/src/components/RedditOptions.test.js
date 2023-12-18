import { render, fireEvent, screen } from "@testing-library/react";
import React from "react";
import RedditOptions from "./RedditOptions";

const mockSetRedditSearchData = jest.fn();

test("RedditOptions handles subreddit input changes", () => {
	render(
		<RedditOptions
			redditSearchData={{}}
			setRedditSearchData={mockSetRedditSearchData}
			searchButtonActive={true}
		/>,
	);

	fireEvent.change(screen.getByLabelText("Search Subreddit"), {
		target: { value: "New Subreddit" },
	});

	expect(mockSetRedditSearchData).toHaveBeenCalledWith({
		subreddit: "New Subreddit",
		token: sessionStorage.getItem("token"),
	});
});

test("RedditOptions handles query input changes", () => {
	render(
		<RedditOptions
			redditSearchData={{}}
			setRedditSearchData={mockSetRedditSearchData}
			searchButtonActive={true}
		/>,
	);

	fireEvent.change(screen.getByLabelText("Search Query"), {
		target: { value: "New Query" },
	});

	expect(mockSetRedditSearchData).toHaveBeenCalledWith({
		query: "New Query",
		token: sessionStorage.getItem("token"),
	});
});
