import { render, screen } from "@testing-library/react";
import React from "react";
import SODateOptions from "./SODateOptions";

const mockSoFieldStatus = {
	from_date: false,
	to_date: false,
};
const mockSoSearchData = {};
const mockSetSoSearchData = jest.fn();

test("SODateOptions renders two SODateOptionInput components", () => {
	render(
		<SODateOptions
			soFieldStatus={mockSoFieldStatus}
			soSearchData={mockSoSearchData}
			setSoSearchData={mockSetSoSearchData}
		/>,
	);

	expect(screen.getByLabelText("From Date")).toBeInTheDocument();
	expect(screen.getByLabelText("To Date")).toBeInTheDocument();
});
