import { render, fireEvent, screen } from "@testing-library/react";
import React from "react";
import Input from "./FormInput";

const mockSetFormState = jest.fn();
const formState = { name: "" };

test("Input component renders without crashing", () => {
	render(
		<Input
			divclass="test-div"
			labelclass="test-label"
			inputclass="test-input"
			label="Test Label"
			type="text"
			id="test-id"
			name="name"
			formState={formState}
			setFormState={mockSetFormState}
		/>,
	);

	expect(screen.getByLabelText("Test Label")).toBeInTheDocument();
});

test("Input component handles input change", () => {
	render(
		<Input
			divclass="test-div"
			labelclass="test-label"
			inputclass="test-input"
			label="Test Label"
			type="text"
			id="test-id"
			name="name"
			formState={formState}
			setFormState={mockSetFormState}
		/>,
	);

	fireEvent.change(screen.getByLabelText("Test Label"), {
		target: { value: "New Value" },
	});

	expect(mockSetFormState).toHaveBeenCalledWith({ name: "New Value" });
});

test("Input component updates formState on input change", () => {
	render(
		<Input
			divclass="test-div"
			labelclass="test-label"
			inputclass="test-input"
			label="Test Label"
			type="text"
			id="test-id"
			name="name"
			formState={formState}
			setFormState={mockSetFormState}
		/>,
	);

	fireEvent.change(screen.getByLabelText("Test Label"), {
		target: { value: "New Value" },
	});

	expect(mockSetFormState).toHaveBeenCalledWith({ name: "New Value" });
});
