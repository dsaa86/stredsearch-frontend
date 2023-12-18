import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import React from "react";
import LoginForm from "./LoginForm";
import loginUser from "../functions/LoginUser";

jest.mock("../functions/LoginUser");

const mockSetLoginStatus = jest.fn();
const mockSetShowLoginForm = jest.fn();
const mockSetUserDetails = jest.fn();

test("LoginForm handles form submission", async () => {
	render(
		<LoginForm
			setLoginStatus={mockSetLoginStatus}
			setShowLoginForm={mockSetShowLoginForm}
			userDetails={null}
			setUserDetails={mockSetUserDetails}
		/>,
	);

	fireEvent.click(screen.getByText("Login"));

	await waitFor(() => expect(loginUser).toHaveBeenCalled());
});

test("LoginForm handles input changes", () => {
	render(
		<LoginForm
			setLoginStatus={mockSetLoginStatus}
			setShowLoginForm={mockSetShowLoginForm}
			userDetails={null}
			setUserDetails={mockSetUserDetails}
		/>,
	);

	fireEvent.change(screen.getByLabelText("Username:"), {
		target: { value: "New Username" },
	});

	fireEvent.change(screen.getByLabelText("Password:"), {
		target: { value: "New Password" },
	});

	expect(screen.getByLabelText("Username:").value).toBe("New Username");
	expect(screen.getByLabelText("Password:").value).toBe("New Password");
});
