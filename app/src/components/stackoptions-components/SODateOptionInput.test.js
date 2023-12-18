import { render, fireEvent, screen } from "@testing-library/react";
import React from "react";
import SODateOptionInput from "./SODateOptionInput";

const mockOnChangeHandler = jest.fn();

test("SODateOptionInput handles input changes", () => {
	render(
		<SODateOptionInput
			identifier="test"
			onChangeHandler={mockOnChangeHandler}
			disabledStatus={false}
			defaultValue=""
		/>,
	);

	fireEvent.change(screen.getByLabelText("Test"), {
		target: { value: "2022-01-01" },
	});

	expect(screen.getByLabelText("Test").value).toBe("2022-01-01");
});

test("SODateOptionInput handles disabled status", () => {
	render(
		<SODateOptionInput
			identifier="test"
			onChangeHandler={mockOnChangeHandler}
			disabledStatus={false}
			defaultValue=""
		/>,
	);

	expect(screen.getByLabelText("Test")).toBeDisabled();
});
