import { render, fireEvent, screen } from "@testing-library/react";
import React from "react";
import GreetingContainer from "./GreetingContainer";
import showSearchHistory from "../functions/SearchHistoryFunctions";

jest.mock("../functions/SearchHistoryFunctions");

const mockAuthController = {};
const mockSearchHistoryController = {};

test("GreetingContainer renders without crashing", () => {
	const userDetails = { name: "Test User" };
	sessionStorage.setItem("user_name", userDetails.name);

	render(
		<GreetingContainer
			loginStatus={true}
			userDetails={userDetails}
			authController={mockAuthController}
			searchHistoryController={mockSearchHistoryController}
		/>,
	);

	expect(
		screen.getByText(`Welcome, ${userDetails.name}`),
	).toBeInTheDocument();
});

test("GreetingContainer does not render when userDetails is null", () => {
	render(
		<GreetingContainer
			loginStatus={true}
			userDetails={null}
			authController={mockAuthController}
			searchHistoryController={mockSearchHistoryController}
		/>,
	);

	expect(screen.queryByText(/Welcome,/)).not.toBeInTheDocument();
});

test("GreetingContainer calls showSearchHistory on button click", () => {
	const userDetails = { name: "Test User" };
	sessionStorage.setItem("user_name", userDetails.name);

	render(
		<GreetingContainer
			loginStatus={true}
			userDetails={userDetails}
			authController={mockAuthController}
			searchHistoryController={mockSearchHistoryController}
		/>,
	);

	fireEvent.click(screen.getByText("View Search History"));

	expect(showSearchHistory).toHaveBeenCalledWith(
		mockAuthController,
		mockSearchHistoryController,
	);
});
