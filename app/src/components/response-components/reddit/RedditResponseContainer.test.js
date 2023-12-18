import { render, screen } from "@testing-library/react";
import React from "react";
import RedditResponseContainer from "./RedditResponseContainer";

test("renders reddit response container and tests child components are rendered", () => {
	const question = {
		question_title: "Reddit Test Title",
		question_link: "https://www.reddit.com/r/test-subreddit",
	};
	render(<RedditResponseContainer question={question} />);

	const responseTitleRender = screen.getByText(/Reddit Test Title/i);
	const redditResponseSubRedditRender = screen.getByText(/test-subreddit/i);
	expect(responseTitleRender).toBeInTheDocument();
	expect(redditResponseSubRedditRender).toBeInTheDocument();
});
