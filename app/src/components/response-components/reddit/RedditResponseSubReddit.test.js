import { render, screen } from "@testing-library/react";
import React from "react";
import RedditResponseSubReddit from "./RedditResponseSubReddit";

test("renders reddit response container and tests child components are rendered", () => {
	const subreddit = "https://www.reddit.com/r/test-subreddit";
	render(<RedditResponseSubReddit subreddit={subreddit} />);

	const redditResponseSubRedditRender = screen.getByText(/test-subreddit/i);
	expect(redditResponseSubRedditRender).toBeInTheDocument();
});
