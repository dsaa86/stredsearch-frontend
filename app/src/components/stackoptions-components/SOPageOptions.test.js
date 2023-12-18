import { render, fireEvent, screen } from "@testing-library/react";
import React from "react";
import SOPageOptions from "./SOPageOptions";

const mockSetSoSearchData = jest.fn();

test("SOPageOptions handles page size input changes", () => {
	render(
		<SOPageOptions
			soFieldStatus={{ page_size: false, page_number: false }}
			soSearchData={{}}
			setSoSearchData={mockSetSoSearchData}
		/>,
	);

	fireEvent.change(screen.getByLabelText("Page Size"), {
		target: { value: "20" },
	});

	expect(screen.getByLabelText("Page Size").value).toBe("20");
});

test("SOPageOptions handles page number input changes", () => {
	render(
		<SOPageOptions
			soFieldStatus={{ page_size: false, page_number: false }}
			soSearchData={{}}
			setSoSearchData={mockSetSoSearchData}
		/>,
	);

	fireEvent.change(screen.getByLabelText("Page Number"), {
		target: { value: "2" },
	});

	expect(screen.getByLabelText("Page Number").value).toBe("2");
});
