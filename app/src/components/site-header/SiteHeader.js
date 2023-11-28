import "../SearchAppComponentsStyle.css";
import SearchOptionsHeader from "../generic-components/search-options-header";
import LoginLogoutButtonContainer from "./Login-LogoutContainer";

export default function SiteHeader({
	loginStatus,
	setLoginStatus,
	setShowLoginForm,
	setShowRegisterForm,
}) {
	return (
		<div id="site-header-container">
			<div className="site-header">
				<SearchOptionsHeader
					title={"StredSearch"}
					headerType={1}
				/>
				<LoginLogoutButtonContainer
					loginStatus={loginStatus}
					setLoginStatus={setLoginStatus}
					setShowLoginForm={setShowLoginForm}
					setShowRegisterForm={setShowRegisterForm}
				/>
			</div>
		</div>
	);
}
