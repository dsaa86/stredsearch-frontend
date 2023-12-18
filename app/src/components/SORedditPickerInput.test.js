import { render, fireEvent, screen } from "@testing-library/react";
import React from "react";
import SoRedditPickerInput from "./SORedditPickerInput";

test("SoRedditPickerInput renders label and checkbox", () => {
	render(
		<SoRedditPickerInput
			identifier="test"
			formattedIdentifier="Test"
			checkedState={false}
			changeHandler={jest.fn()}
		/>,
	);

	expect(screen.getByLabelText("Test")).toBeInTheDocument();
	expect(screen.getByRole("checkbox")).toBeInTheDocument();
});

test("SoRedditPickerInput handles checkbox changes", () => {
	const mockChangeHandler = jest.fn();

	render(
		<SoRedditPickerInput
			identifier="test"
			formattedIdentifier="Test"
			checkedState={false}
			changeHandler={mockChangeHandler}
		/>,
	);

	fireEvent.click(screen.getByRole("checkbox"));

	expect(mockChangeHandler).toHaveBeenCalled();
});
