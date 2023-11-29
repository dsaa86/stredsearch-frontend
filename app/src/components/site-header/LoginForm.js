import { useState, useEffect } from "react";
import axios from "axios";
import "../SearchAppComponentsStyle.css";

import FormInput from "./FormInput";
import FormButton from "./FormButton";
import FormAlertContainer from "./FormAlertContainer";

import {
	handleUserLoginToStredSearch,
	handleGetUserDetailsFromServer,
} from "../functions/LoginLogoutFunctions";

export default function LoginForm({
	setLoginStatus,
	setShowLoginForm,
	userDetails,
	setUserDetails,
}) {
	let loginCancelToken;

	const [errorsRendered, setErrorsRendered] = useState(0);

	const [formState, setFormState] = useState({
		login_username: "",
		login_password: "",
	});

	const [formInvalid, setFormInvalid] = useState({
		error: {
			blank: "",
		},
		valid: true,
		attempt: 0,
	});

	useEffect(() => {}, [formInvalid]);

	const loginFormSubmit = () => {
		if (loginCancelToken) {
			loginCancelToken.cancel("Operation canceled by the user.");
		}

		loginCancelToken = axios.CancelToken.source();

		handleUserLoginToStredSearch(
			formState.login_username,
			formState.login_password,
			loginCancelToken,
		)
			.then((response) => {
				sessionStorage.setItem("token", response.data.token);
				setLoginStatus(true);
				setShowLoginForm(false);
				handleGetUserDetailsFromServer(sessionStorage.getItem("token"))
					.then((response) => {
						sessionStorage.setItem(
							"user_name",
							response.data.username,
						);
						setUserDetails(true);
					})
					.catch((error) => {
						console.log(error);
					});
			})
			.catch((error) => {
				console.log(error);
				// user has not logged in successfully, tidy up app state and inform user
				setFormInvalid({
					error: {
						servererror: "Login failed.",
					},
					valid: false,
				});
			});
	};

	return (
		<div id="login-form-div">
			<form
				id="login-form"
				className="container"
			>
				<FormInput
					divclass={"login-form-block row"}
					labelclass={"col-xlg-2 col-md-3 col-sm-4 col-12"}
					inputclass={"col-xlg-10 col-md-9 col-sm-8 col-12"}
					label={"Username:"}
					type={"text"}
					id={"login_username"}
					name={"login_username"}
					formState={formState}
					setFormState={setFormState}
				/>
				<FormInput
					divclass={"login-form-block row"}
					labelclass={"col-xlg-2 col-md-3 col-sm-4 col-12"}
					inputclass={"col-xlg-10 col-md-9 col-sm-8 col-12"}
					label={"Password:"}
					type={"password"}
					id={"login_password"}
					name={"login_password"}
					formState={formState}
					setFormState={setFormState}
				/>
				<FormButton
					divclass={"login-form-block row"}
					buttonclass={"col-12 btn btn-primary"}
					label={"Login"}
					id={"login-submit-button"}
					onClick={loginFormSubmit}
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
