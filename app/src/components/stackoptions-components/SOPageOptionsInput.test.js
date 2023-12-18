import { render, fireEvent, screen } from "@testing-library/react";
import React from "react";
import SOPageOptionsInput from "./SOPageOptionsInput";

const mockOnChangeFunction = jest.fn();

test("SOPageOptionsInput handles input changes", () => {
	render(
		<SOPageOptionsInput
			identifier="test"
			min={1}
			onChangeFunction={mockOnChangeFunction}
			disabledOption={false}
			defaultValue={1}
			max={10}
		/>,
	);

	fireEvent.change(screen.getByLabelText("Test"), {
		target: { value: "5" },
	});

	expect(screen.getByLabelText("Test").value).toBe("5");
});
