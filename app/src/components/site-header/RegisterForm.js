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

export default function RegisterForm({ setLoginStatus }) {
	let registerCancelToken;

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

		const validatedFormSubmission = validateFormSubmission(formState);

		// user needs to update their information in the form
		if (!validatedFormSubmission.valid) {
			setFormInvalid(validatedFormSubmission);
			return;
		}

		//let's register the user
		if (registerCancelToken) {
			registerCancelToken.cancel("Operation canceled by the user.");
		}

		registerCancelToken = axios.CancelToken.source();

		const url = "http://localhost:8000/register/";

		handleRegisterUserToStredSearch(url, registerCancelToken, formState, [
			["Content-Type", "multipart/form-data"],
			["cancelToken", registerCancelToken.token],
		])
			.then((response) => {
				if (response.status === 201) {
					// user has been registered successfully, let's log them in
					handleUserLoginToStredSearch(
						response.data.username,
						formState.register_password,
					)
						.then((response) => {
							sessionStorage.setItem(
								"token",
								response.data.token,
							);
							setLoginStatus(true);
						})
						.catch((errors) => {});
				}
			})
			.catch((error) => {
				let response = {
					error: {},
					valid: false,
				};
				// check if username is valid
				if (error.response.status === 409) {
					response.error.existinguser =
						"Your username or email already exists. Please try again.";
				} else {
					response.error.servererror =
						"Bad server request. Try again later.";
				}
				setFormInvalid(response);
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
