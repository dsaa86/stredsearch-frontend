import { render, screen } from "@testing-library/react";
import React from "react";
import FormAlertContainer from "./FormAlertContainer";
import validateUserRegistrationForm from "../functions/RegisterUserAdditionalFunctions/ValidateUserRegistrationForm";

test("Tests Form Alert Container with sample errors", () => {
	const useRegisterForm = {
		formInvalid: {
			error: {
				errorOne: "Test Error One",
				errorTwo: "Test Error Two",
				errorThree: "Test Error Three",
			},
			valid: false,
			attempt: 0,
		},
		errorsRendered: 0,
		setErrorsRendered: jest.fn(),
	};

	render(
		<FormAlertContainer
			formInvalid={useRegisterForm.formInvalid}
			errorsRendered={useRegisterForm.errorsRendered}
			setErrorsRendered={useRegisterForm.setErrorsRendered}
		/>,
	);

	const allErrors = Object.values(useRegisterForm.formInvalid.error);

	allErrors.forEach((error) => {
		const messageElement = screen.getByText(error);
		expect(messageElement).toBeInTheDocument();
	});
});

test("Tests Form Alert Container with no errors", () => {
	const useRegisterForm = {
		formInvalid: {
			error: {},
			valid: true,
			attempt: 0,
		},
		errorsRendered: 0,
		setErrorsRendered: jest.fn(),
	};

	render(
		<FormAlertContainer
			formInvalid={useRegisterForm.formInvalid}
			errorsRendered={useRegisterForm.errorsRendered}
			setErrorsRendered={useRegisterForm.setErrorsRendered}
		/>,
	);

	const formAlerts = screen.queryAllByTestId("form-alert");
	expect(formAlerts).toHaveLength(0);
});
