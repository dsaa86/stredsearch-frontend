import { render, screen } from "@testing-library/react";
import React from "react";
import ButtonAndGreetingContainer from "./ButtonAndGreetingContainer";

beforeEach(() => {
	const mockSessionStorage = {
		getItem: jest.fn(),
		setItem: jest.fn(),
		clear: jest.fn(),
		removeItem: jest.fn(),
		length: 0,
		key: jest.fn(),
	};
	global.window.sessionStorage = mockSessionStorage;
});

test("Tests button and greeting container with no user login", () => {
	const loginStatus = false;
	const setLoginStatus = jest.fn();
	const setShowLoginForm = jest.fn();
	const setShowRegisterForm = jest.fn();
	const userDetails = false;
	const authController = {};
	const searchHistoryController = {};

	render(
		<ButtonAndGreetingContainer
			loginStatus={loginStatus}
			setLoginStatus={setLoginStatus}
			setShowLoginForm={setShowLoginForm}
			setShowRegisterForm={setShowRegisterForm}
			userDetails={userDetails}
			authController={authController}
			searchHistoryController={searchHistoryController}
		/>,
	);

	const loginButtonText = "Login";
	const registerButtonText = "Register";
	const logoutButtonText = "Logout";
	const viewSearchHistoryText = "View Search History";

	const loginButtonElement = screen.getByText(loginButtonText);
	const registerButtonElement = screen.getByText(registerButtonText);
	const logoutButtonElement = screen.queryByText(logoutButtonText);
	const viewSearchHistoryButtonElement = screen.queryByText(
		viewSearchHistoryText,
	);
	expect(loginButtonElement).toBeInTheDocument();
	expect(registerButtonElement).toBeInTheDocument();
	expect(logoutButtonElement).not.toBeInTheDocument();
	expect(viewSearchHistoryButtonElement).not.toBeInTheDocument();
});

test("Tests button and greeting container with a user logged in", () => {
	const loginStatus = true;
	const setLoginStatus = jest.fn();
	const setShowLoginForm = jest.fn();
	const setShowRegisterForm = jest.fn();
	const userDetails = true;
	const authController = {};
	const searchHistoryController = {};

	render(
		<ButtonAndGreetingContainer
			loginStatus={loginStatus}
			setLoginStatus={setLoginStatus}
			setShowLoginForm={setShowLoginForm}
			setShowRegisterForm={setShowRegisterForm}
			userDetails={userDetails}
			authController={authController}
			searchHistoryController={searchHistoryController}
		/>,
	);

	const loginButtonText = "Login";
	const registerButtonText = "Register";
	const logoutButtonText = "Logout";
	const viewSearchHistoryText = "View Search History";

	const loginButtonElement = screen.queryByText(loginButtonText);
	const registerButtonElement = screen.queryByText(registerButtonText);
	const logoutButtonElement = screen.getByText(logoutButtonText);
	const viewSearchHistoryButtonElement = screen.getByText(
		viewSearchHistoryText,
	);
	expect(loginButtonElement).not.toBeInTheDocument();
	expect(registerButtonElement).not.toBeInTheDocument();
	expect(logoutButtonElement).toBeInTheDocument();
	expect(viewSearchHistoryButtonElement).toBeInTheDocument();
});
