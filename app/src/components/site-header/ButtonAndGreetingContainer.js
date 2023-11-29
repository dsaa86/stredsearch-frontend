import "../SearchAppComponentsStyle.css";
import SearchOptionsHeader from "../generic-components/search-options-header";
import LoginLogoutButtonContainer from "./Login-LogoutContainer";
import GreetingContainer from "./GreetingContainer";

export default function ButtonAndGreetingContainer({
	loginStatus,
	setLoginStatus,
	setShowLoginForm,
	setShowRegisterForm,
	userDetails,
}) {
	return (
		<div id="button-and-greeting-container">
			<GreetingContainer
				loginStatus={loginStatus}
				userDetails={userDetails}
			/>
			<LoginLogoutButtonContainer
				loginStatus={loginStatus}
				setLoginStatus={setLoginStatus}
				setShowLoginForm={setShowLoginForm}
				setShowRegisterForm={setShowRegisterForm}
			/>
		</div>
	);
}
