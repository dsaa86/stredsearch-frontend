import { render, screen } from "@testing-library/react";
import React from "react";
import StackOptions from "./StackOptions";

test("StackOptions renders correctly", () => {
	const mockSetSoSearchData = jest.fn();
	const mockSoSearchData = {
		page_number: 1,
		page_size: 10,
		from_date: "",
		to_date: "",
		resultsSort: "relevance",
		order: "desc",
		tagged: "",
		nottagged: "",
		intitle: "",
		user: "",
		query: "",
		body: "",
		accepted: false,
		closed: false,
		migrated: false,
		wiki: false,
	};

	render(
		<StackOptions
			soSearchData={mockSoSearchData}
			setSoSearchData={mockSetSoSearchData}
			searchButtonActive={false}
		/>,
	);

	expect(
		screen.getByText("Stack Overflow Search Options"),
	).toBeInTheDocument();
	expect(screen.getByLabelText("Question Tags")).toBeInTheDocument();
	expect(screen.getByLabelText("Question Not Tagged")).toBeInTheDocument();
	expect(screen.getByLabelText("In Title")).toBeInTheDocument();
	expect(screen.getByLabelText("User")).toBeInTheDocument();
	expect(screen.getByLabelText("Query")).toBeInTheDocument();
	expect(screen.getByLabelText("Body")).toBeInTheDocument();
});
