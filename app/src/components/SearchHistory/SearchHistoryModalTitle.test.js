import { render, screen } from "@testing-library/react";
import React from "react";
import SearchHistoryModalTitle from "./SearchHistoryModalTitle";

test("renders title and date with simple string", () => {
	const title = "Search History";

	render(<SearchHistoryModalTitle />);

	const titleElement = screen.getByText(title);
	expect(titleElement).toBeInTheDocument();
});
