import { render, fireEvent, screen } from "@testing-library/react";
import React from "react";
import LocalSearchFields from "./LocalSearchFields";

const mockSetSearchBoxValue = jest.fn();
const mockLocalSearchButtonHandler = jest.fn();

test("LocalSearchFields handles input changes", () => {
	render(
		<LocalSearchFields
			localSearchButtonHandler={mockLocalSearchButtonHandler}
			setSearchBoxValue={mockSetSearchBoxValue}
		/>,
	);

	fireEvent.change(screen.getByPlaceholderText("Search..."), {
		target: { value: "New Value" },
	});

	expect(mockSetSearchBoxValue).toHaveBeenCalledWith("New Value");
});

test("LocalSearchFields handles button clicks", () => {
	render(
		<LocalSearchFields
			localSearchButtonHandler={mockLocalSearchButtonHandler}
			setSearchBoxValue={mockSetSearchBoxValue}
		/>,
	);

	fireEvent.click(screen.getByText("Search"));

	expect(mockLocalSearchButtonHandler).toHaveBeenCalled();
});
