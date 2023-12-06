import GreetingContainer from "./GreetingContainer";
import LoginLogoutButtonContainer from "./Login-LogoutContainer";

export default function ButtonAndGreetingContainer({
	loginStatus,
	setLoginStatus,
	setShowLoginForm,
	setShowRegisterForm,
	userDetails,
	authController,
}) {
	return (
		<div id="button-and-greeting-container">
			<GreetingContainer
				loginStatus={loginStatus}
				userDetails={userDetails}
				authController={authController}
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
