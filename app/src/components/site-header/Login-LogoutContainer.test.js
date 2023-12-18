import { render, screen } from "@testing-library/react";
import React from "react";
import LoginLogoutButtonContainer from "./Login-LogoutContainer";

const mockSetShowLoginForm = jest.fn();
const mockSetShowRegisterForm = jest.fn();
const mockSetLoginStatus = jest.fn();

test("LoginLogoutButtonContainer shows Login and Register buttons when not logged in", () => {
	render(
		<LoginLogoutButtonContainer
			loginStatus={false}
			setLoginStatus={mockSetLoginStatus}
			setShowLoginForm={mockSetShowLoginForm}
			setShowRegisterForm={mockSetShowRegisterForm}
		/>,
	);

	expect(screen.getByText("Login")).toBeInTheDocument();
	expect(screen.getByText("Register")).toBeInTheDocument();
	expect(screen.queryByText("Logout")).not.toBeInTheDocument();
});

test("LoginLogoutButtonContainer shows Logout button when logged in", () => {
	render(
		<LoginLogoutButtonContainer
			loginStatus={true}
			setLoginStatus={mockSetLoginStatus}
			setShowLoginForm={mockSetShowLoginForm}
			setShowRegisterForm={mockSetShowRegisterForm}
		/>,
	);

	expect(screen.getByText("Logout")).toBeInTheDocument();
	expect(screen.queryByText("Login")).not.toBeInTheDocument();
	expect(screen.queryByText("Register")).not.toBeInTheDocument();
});
