import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import RegisterButton from "./RegisterButton";

export default function LoginLogoutButtonContainer({
	loginStatus,
	setLoginStatus,
	setShowLoginForm,
	setShowRegisterForm,
}) {
	return (
		<div
			id="login-logout-button-container"
			className="login-logout-button-container"
		>
			<LoginButton
				loginStatus={loginStatus}
				setShowLoginForm={setShowLoginForm}
			/>
			<RegisterButton
				loginStatus={loginStatus}
				setShowRegisterForm={setShowRegisterForm}
			/>
			<LogoutButton
				loginStatus={loginStatus}
				setLoginStatus={setLoginStatus}
			/>
		</div>
	);
}
