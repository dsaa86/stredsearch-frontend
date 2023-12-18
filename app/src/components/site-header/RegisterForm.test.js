import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import React from "react";
import RegisterForm from "./RegisterForm";
import registerUser from "../functions/RegisterUser";

jest.mock("../functions/RegisterUser");

const mockSetLoginStatus = jest.fn();
const mockSetShowRegisterForm = jest.fn();
const mockSetUserDetails = jest.fn();

test("RegisterForm handles form submission", async () => {
	render(
		<RegisterForm
			setLoginStatus={mockSetLoginStatus}
			setShowRegisterForm={mockSetShowRegisterForm}
			userDetails={null}
			setUserDetails={mockSetUserDetails}
		/>,
	);

	fireEvent.click(screen.getByText("Register"));

	await waitFor(() => expect(registerUser).toHaveBeenCalled());
});

test("RegisterForm handles input changes", () => {
	render(
		<RegisterForm
			setLoginStatus={mockSetLoginStatus}
			setShowRegisterForm={mockSetShowRegisterForm}
			userDetails={null}
			setUserDetails={mockSetUserDetails}
		/>,
	);

	fireEvent.change(screen.getByLabelText("Username:"), {
		target: { value: "New Username" },
	});

	fireEvent.change(screen.getByLabelText("Email:"), {
		target: { value: "newemail@example.com" },
	});

	fireEvent.change(screen.getByLabelText("Password:"), {
		target: { value: "New Password" },
	});

	fireEvent.change(screen.getByLabelText("Confirm Password:"), {
		target: { value: "New Password" },
	});

	expect(screen.getByLabelText("Username:").value).toBe("New Username");
	expect(screen.getByLabelText("Email:").value).toBe("newemail@example.com");
	expect(screen.getByLabelText("Password:").value).toBe("New Password");
	expect(screen.getByLabelText("Confirm Password:").value).toBe(
		"New Password",
	);
});
