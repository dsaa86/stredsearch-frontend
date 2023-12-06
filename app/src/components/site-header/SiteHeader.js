import SearchOptionsHeader from "../generic-components/search-options-header";
import ButtonAndGreetingContainer from "./ButtonAndGreetingContainer";

export default function SiteHeader({
	loginStatus,
	setLoginStatus,
	setShowLoginForm,
	setShowRegisterForm,
	userDetails,
	authController,
}) {
	return (
		<div id="site-header-container">
			<div className="site-header">
				<SearchOptionsHeader
					title={"StredSearch"}
					headerType={1}
				/>
				<ButtonAndGreetingContainer
					loginStatus={loginStatus}
					setLoginStatus={setLoginStatus}
					setShowLoginForm={setShowLoginForm}
					setShowRegisterForm={setShowRegisterForm}
					userDetails={userDetails}
					authController={authController}
				/>
			</div>
		</div>
	);
}
