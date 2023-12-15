import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import RedditSearchTextInput from "./RedditSearchTextInput";

test("renders RedditSearchBy component", () => {
	const handleInputChange = jest.fn();
	render(
		<RedditSearchTextInput
			identifier={"reddit-test-string"}
			handleInputChange={handleInputChange}
		/>,
	);

	const prettifiedIdentifier = screen.getByText(/Reddit Test String/i);
	expect(prettifiedIdentifier).toBeInTheDocument();
});

test("fires textbox onchange and tests result", () => {
	const handleInputChange = jest.fn();

	const { container } = render(
		<RedditSearchTextInput
			identifier={"reddit"}
			handleInputChange={handleInputChange}
		/>,
	);

	const input = container.querySelector("#reddit-input");

	fireEvent.change(input, {
		target: { value: "src" },
	});

	expect(handleInputChange).toHaveBeenCalled();
});
