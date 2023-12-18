import { render, fireEvent, screen } from "@testing-library/react";
import React from "react";
import SOOptionsTextInput from "./SOOptionsTextInput";

const mockSetSoSearchData = jest.fn();

test("SOOptionsTextInput handles input changes", () => {
	render(
		<SOOptionsTextInput
			soSearchData={{}}
			setSoSearchData={mockSetSoSearchData}
			changeIdentifier="test"
			disabledStatus={true}
			identifier="test"
			identifierLabel="Test"
		/>,
	);

	fireEvent.change(screen.getByLabelText("Test"), {
		target: { value: "New Value" },
	});

	expect(mockSetSoSearchData).toHaveBeenCalled();
});

test("SOOptionsTextInput handles disabled status", () => {
	render(
		<SOOptionsTextInput
			soSearchData={{}}
			setSoSearchData={mockSetSoSearchData}
			changeIdentifier="test"
			disabledStatus={false}
			identifier="test"
			identifierLabel="Test"
		/>,
	);

	expect(screen.getByLabelText("Test")).toBeDisabled();
});
