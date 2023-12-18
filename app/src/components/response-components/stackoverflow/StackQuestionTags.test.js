import { render, screen } from "@testing-library/react";
import React from "react";
import StackQuestionTags from "./StackQuestionTags";

test("renders tags with given list and tests for number of tags rendered", () => {
	const tag_list_string = "tag1, tag2, tag3";
	const tag_list = tag_list_string.split(", ");

	render(<StackQuestionTags tags={tag_list_string} />);

	const number_of_tags = document.querySelectorAll(
		".stack-response-question-tag",
	);
	expect(number_of_tags).toHaveLength(tag_list.length);
});

test("renders tags with given list and ensures tag text is rendered appropriately", () => {
	const tag_list_string = "tag1, tag2, tag3";
	const tag_list = tag_list_string.split(", ");

	render(<StackQuestionTags tags={tag_list_string} />);

	tag_list.forEach((tag) => {
		const tag_element = screen.getByText(tag);
		expect(tag_element).toBeInTheDocument();
	});
});
