import React from "react";
import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
import SearchOptionsHeader from "./search-options-header";

test("renders SearchOptionsHeader component", () => {
	render(
		<SearchOptionsHeader
			title={"Test Heading"}
			headerType={4}
		/>,
	);
	const titleElement = screen.getByText(/Test Heading/i);
	expect(titleElement).toBeInTheDocument();
	expect(titleElement.nodeName).toBe("H4");
});
