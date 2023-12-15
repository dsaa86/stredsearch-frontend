import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RedditSearchBy from "./RedditSearchBy";

test("renders RedditSearchBy component", () => {
	const redditSearchData = { search_by: "list" };
	const setRedditSearchData = jest.fn();

	const { getByText, getByDisplayValue } = render(
		<RedditSearchBy
			redditSearchData={redditSearchData}
			setRedditSearchData={setRedditSearchData}
		/>,
	);

	expect(getByText("Search By")).toBeInTheDocument();

	fireEvent.change(getByDisplayValue("Questions"), {
		target: { value: "src" },
	});

	expect(setRedditSearchData).toHaveBeenCalledWith({ search_by: "src" });
});
