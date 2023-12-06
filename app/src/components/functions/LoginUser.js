import axios from "axios";
import handleUserLoginToStredSearch from "./LoginUserAdditionalFunctions/HandleUserLoginToStredSearch";
import handleGetUserDetailsFromServer from "./LoginUserAdditionalFunctions/HandleGetUserDetailsFromServer";
import setTokenSessionVariable from "./LoginUserAdditionalFunctions/SetTokenSessionVariable";
import handleLoginError from "./LoginUserAdditionalFunctions/HandleLoginError";

const loginUser = (
	loginCancelToken,
	username,
	password,
	setLoginStatus,
	setShowLoginForm,
	setUserDetails,
	setFormInvalid,
) => {
	if (loginCancelToken) {
		loginCancelToken.cancel("Operation canceled by the user.");
	}

	loginCancelToken = axios.CancelToken.source();

	handleUserLoginToStredSearch(username, password, loginCancelToken)
		.then((response) => {
			setTokenSessionVariable(
				response.data.token,
				setLoginStatus,
				setShowLoginForm,
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
		.catch((error) => {
			console.log(error);
			handleLoginError("servererror", "Login failed.", setFormInvalid);
		});
};

export default loginUser;
