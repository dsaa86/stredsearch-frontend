import axios from "axios";
import handleUserLoginToStredSearch from "../LoginUserAdditionalFunctions/HandleUserLoginToStredSearch";
import setTokenSessionVariable from "../LoginUserAdditionalFunctions/SetTokenSessionVariable";
import handleGetUserDetailsFromServer from "../LoginUserAdditionalFunctions/HandleGetUserDetailsFromServer";
import handleLoginError from "../LoginUserAdditionalFunctions/HandleLoginError";

const initiateLogin = (
	loginCancelToken,
	username,
	password,
	setLoginStatus,
	setShowRegisterForm,
	setFormInvalid,
	setUserDetails,
	userDetails,
) => {
	if (loginCancelToken) {
		loginCancelToken.cancel("Operation canceled by the user.");
	}

	loginCancelToken = axios.CancelToken.source();
	// user has been registered successfully, log them in
	handleUserLoginToStredSearch(username, password, loginCancelToken)
		.then((response) => {
			// user has logged in successfully, tidy up app state and save token in session data
			setTokenSessionVariable(
				response.data.token,
				setLoginStatus,
				setShowRegisterForm,
			);

			handleGetUserDetailsFromServer(sessionStorage.getItem("token"))
				.then((response) => {
					sessionStorage.setItem("user_name", response.data.username);
					setUserDetails(true);
				})
				.catch((error) => {
					console.log(error);
				});
		})
		.catch((errors) => {
			console.log(errors);
			handleLoginError(
				"servererror",
				"Registration succesful, but login failed. Try logging in manually.",
				setFormInvalid,
			);
		});
};

export default initiateLogin;
