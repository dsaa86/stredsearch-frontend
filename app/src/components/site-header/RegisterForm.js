import { useEffect, useState } from "react";
import axios from "axios";
import "../SearchAppComponentsStyle.css";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import FormAlertContainer from "./FormAlertContainer";

import {
	handleRegisterUserToStredSearch,
	validateFormSubmission,
	handleUserLoginToStredSearch,
} from "../functions/LoginLogoutFunctions";

export default function RegisterForm({
	setLoginStatus,
	setShowRegisterForm,
	userDetails,
	setUserDetails,
}) {
	let registerCancelToken;
	let loginCancelToken;

	const [errorsRendered, setErrorsRendered] = useState(0);

	const [formState, setFormState] = useState({
		register_username: "",
		register_email: "",
		register_password: "",
		register_password_confirm: "",
	});

	const [formInvalid, setFormInvalid] = useState({
		error: {
			blank: "",
		},
		valid: true,
		attempt: 0,
	});

	useEffect(() => {}, [formInvalid]);

	const registerFormSubmit = () => {
		setFormInvalid({
			error: {
				blank: "",
			},
			valid: true,
			attempt: formInvalid.attempt + 1,
		});

		const validationData = [
			{
				type: "simple",
				input: formState.register_username.length,
				operator: "<",
				value: 3,
				errorKey: "username_minlength",
				errorMessage: "Username must be at least 3 characters long.",
			},
			{
				type: "simple",
				input: formState.register_username.length,
				operator: ">",
				value: 20,
				errorKey: "username_maxlength",
				errorMessage:
					"Username must not be more than 20 characters long.",
			},
			{
				type: "regexp",
				input: formState.register_username,
				regexp: /^[a-zA-Z0-9]+$/,
				errorKey: "username_format",
				errorMessage: "Username can only contain letters and numbers.",
			},
			{
				type: "includes",
				input: formState.register_email,
				includes: "@",
				errorKey: "email_atpresent",
				errorMessage: "Email must contain an @ sign.",
			},
			{
				type: "includes",
				input: formState.register_email,
				includes: ["@", "."],
				errorKey: "email_domainpresent",
				errorMessage: "Email must contain a domain.",
			},
			{
				type: "regexp",
				input: formState.register_email.split("@")[0],
				regexp: /^[a-zA-Z0-9]+$/,
				errorKey: "email_usernameformat",
				errorMessage:
					"Email username can only contain letters and numbers.",
			},
			{
				type: "simple",
				input: formState.register_password.length,
				operator: "<",
				value: 8,
				errorKey: "password_minlength",
				errorMessage: "Password must be at least 8 characters long.",
			},
			{
				type: "simple",
				input: formState.register_password.length,
				operator: ">",
				value: 30,
				errorKey: "password_maxlength",
				errorMessage: "Password must be less than 30 characters long.",
			},
			{
				type: "regexp",
				input: formState.register_password,
				regexp: /^[a-zA-Z0-9_!£$%^&*(){}:;@~'#<>?,.]*$/,
				errorKey: "password_format",
				errorMessage:
					"Password can only contain letters, numbers and the following special characters: _!£$%^&*(){}:;@~'#<>?,.",
			},
			{
				type: "regexp",
				input: formState.register_password,
				regexp: /[A-Z]/,
				errorKey: "password_uppercase",
				errorMessage: "Password must contain at least one uppercase.",
			},
			{
				type: "regexp",
				input: formState.register_password,
				regexp: /[a-z]/,
				errorKey: "password_lowercase",
				errorMessage: "Password must contain at least one lowercase.",
			},
			{
				type: "regexp",
				input: formState.register_password,
				regexp: /[0-9]/,
				errorKey: "password_number",
				errorMessage: "Password must contain at least one number.",
			},
			{
				type: "regexp",
				input: formState.register_password,
				regexp: /[_!£$%^&*(){}:;@~'#<>?,.]/,
				errorKey: "password_special",
				errorMessage:
					"Password must contain at least one special character.",
			},
			{
				type: "simple",
				input: formState.register_password,
				operator: "!=",
				value: formState.register_password_confirm,
				errorKey: "password_match",
				errorMessage: "Passwords do not match.",
			},
		];

		const validatedFormSubmission = validateFormSubmission(validationData);

		// user needs to update their information in the form
		if (!validatedFormSubmission.valid) {
			setFormInvalid(validatedFormSubmission);
			return;
		}

		//user has interrupted the process - belt and braces as UI button is locked during registration request
		if (registerCancelToken) {
			registerCancelToken.cancel("Operation canceled by the user.");
		}

		registerCancelToken = axios.CancelToken.source();

		const url = "http://localhost:8000/register/";

		//register user to Stredsearch
		handleRegisterUserToStredSearch(url, registerCancelToken, formState, [
			["Content-Type", "multipart/form-data"],
			["cancelToken", registerCancelToken.token],
		])
			.then((response) => {
				if (response.status === 201) {
					if (loginCancelToken) {
						loginCancelToken.cancel(
							"Operation canceled by the user.",
						);
					}

					loginCancelToken = axios.CancelToken.source();
					// user has been registered successfully, log them in
					handleUserLoginToStredSearch(
						response.data.username,
						formState.register_password,
						loginCancelToken,
					)
						.then((response) => {
							// user has logged in successfully, tidy up app state and save token in session data
							sessionStorage.setItem(
								"token",
								response.data.token,
							);
							setLoginStatus(true);
							setShowRegisterForm(false);
						})
						.catch((errors) => {
							console.log(errors);
							// user has not logged in successfully, tidy up app state and inform user
							setFormInvalid({
								error: {
									servererror:
										"Registration succesful, but login failed. Try logging in manually.",
								},
								valid: false,
							});
						});
				}
			})
			.catch((error) => {
				// user has not been registered successfully, identify cause and inform user
				let response = {
					error: {},
					valid: false,
				};
				// check if username is valid
				if (error.response === undefined) {
					response.error.servererror =
						"Bad server request. Try again later.";
					setFormInvalid(response);
					return;
				}
				if (error.response.status === 409) {
					response.error.existinguser =
						"Your username or email already exists. Please try again.";
				} else {
					response.error.servererror =
						"Bad server request. Try again later.";
				}
				setFormInvalid(response);
				return;
			});
	};

	return (
		<div id="register-form-div">
			<form
				id="register-form"
				className="container"
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<FormInput
					divclass={"register-form-block row"}
					labelclass={"col-xlg-2 col-md-3 col-sm-4 col-12"}
					inputclass={"col-xlg-10 col-md-9 col-sm-8 col-12"}
					label={"Username:"}
					type={"text"}
					id={"register_username"}
					name={"register_username"}
					formState={formState}
					setFormState={setFormState}
				/>
				<FormInput
					divclass={"register-form-block row"}
					labelclass={"col-xlg-2 col-md-3 col-sm-4 col-12"}
					inputclass={"col-xlg-10 col-md-9 col-sm-8 col-12"}
					label={"Email:"}
					type={"email"}
					id={"register_email"}
					name={"register_email"}
					formState={formState}
					setFormState={setFormState}
				/>

				<FormInput
					divclass={"register-form-block row"}
					labelclass={"col-xlg-2 col-md-3 col-sm-4 col-12"}
					inputclass={"col-xlg-10 col-md-9 col-sm-8 col-12"}
					label={"Password:"}
					type={"password"}
					id={"register_password"}
					name={"register_password"}
					formState={formState}
					setFormState={setFormState}
				/>

				<FormInput
					divclass={"register-form-block row"}
					labelclass={"col-xlg-2 col-md-3 col-sm-4 col-12"}
					inputclass={"col-xlg-10 col-md-9 col-sm-8 col-12"}
					label={"Confirm Password:"}
					type={"password"}
					id={"register_password_confirm"}
					name={"register_password_confirm"}
					formState={formState}
					setFormState={setFormState}
				/>
				<FormButton
					divclass={"register-form-block row"}
					buttonclass={"col-12 btn btn-primary"}
					label={"Register"}
					id={"register-submit-button"}
					onClick={registerFormSubmit}
				/>

				<FormAlertContainer
					formInvalid={formInvalid}
					errorsRendered={errorsRendered}
					setErrorsRendered={setErrorsRendered}
				/>
			</form>
		</div>
	);
}
