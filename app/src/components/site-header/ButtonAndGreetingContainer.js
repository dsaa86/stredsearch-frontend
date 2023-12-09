import GreetingContainer from "./GreetingContainer";
import LoginLogoutButtonContainer from "./Login-LogoutContainer";

export default function ButtonAndGreetingContainer({
	loginStatus,
	setLoginStatus,
	setShowLoginForm,
	setShowRegisterForm,
	userDetails,
	authController,
	searchHistoryController,
}) {
	return (
		<div id="button-and-greeting-container">
			<GreetingContainer
				loginStatus={loginStatus}
				userDetails={userDetails}
				authController={authController}
				searchHistoryController={searchHistoryController}
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
