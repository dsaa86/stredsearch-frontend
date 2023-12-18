import { render, screen } from "@testing-library/react";
import React from "react";
import SiteHeader from "./SiteHeader";

const mockSetShowLoginForm = jest.fn();
const mockSetShowRegisterForm = jest.fn();
const mockSetLoginStatus = jest.fn();
const mockAuthController = {};
const mockSearchHistoryController = {};

test("SiteHeader renders SearchOptionsHeader and ButtonAndGreetingContainer", () => {
	render(
		<SiteHeader
			loginStatus={false}
			setLoginStatus={mockSetLoginStatus}
			setShowLoginForm={mockSetShowLoginForm}
			setShowRegisterForm={mockSetShowRegisterForm}
			userDetails={null}
			authController={mockAuthController}
			searchHistoryController={mockSearchHistoryController}
		/>,
	);

	expect(screen.getByText("StredSearch")).toBeInTheDocument();
	expect(
		screen.getByTestId("button-and-greeting-container"),
	).toBeInTheDocument();
});
