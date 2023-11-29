import { useEffect, useState } from "react";
import "./SearchAppComponentsStyle.css";

import StredSearch from "./StredSearch";
import SearchResultsContainer from "./SearchResultsContainer";
import LocalSearch from "./LocalSearch";
import SiteHeader from "./site-header/SiteHeader";
import LoginForm from "./site-header/LoginForm";
import RegisterForm from "./site-header/RegisterForm";
import useSearchAppController from "./custom-hooks/UseSearchAppController";

export default function SearchApp() {
	const searchAppController = useSearchAppController();
	const [searchButtonActive, setSearchButtonActive] = useState(true);
	return (
		<>
			<div className="search-app-container">
				(searchAppController.showRegisterForm ||
				searchAppController.showLoginForm) && (
				<div
					className={
						(searchAppController.showLoginForm ||
							searchAppController.showRegisterForm) &&
						"login-register-form-holder"
					}
				>
					{searchAppController.showRegisterForm && (
						<>
							<RegisterForm
								setLoginStatus={
									searchAppController.setLoginStatus
								}
								setShowRegisterForm={
									searchAppController.setShowRegisterForm
								}
								userDetails={searchAppController.userDetails}
								setUserDetails={
									searchAppController.setUserDetails
								}
							/>
						</>
					)}
					{searchAppController.showLoginForm && (
						<>
							<LoginForm
								setLoginStatus={
									searchAppController.setLoginStatus
								}
								setShowLoginForm={
									searchAppController.setShowLoginForm
								}
								userDetails={searchAppController.userDetails}
								setUserDetails={
									searchAppController.setUserDetails
								}
							/>
						</>
					)}
				</div>
				)
				<div className="search-functions-container">
					<SiteHeader
						loginStatus={searchAppController.loginStatus}
						setLoginStatus={searchAppController.setLoginStatus}
						setShowLoginForm={searchAppController.setShowLoginForm}
						setShowRegisterForm={
							searchAppController.setShowRegisterForm
						}
						userDetails={searchAppController.userDetails}
					/>
					<LocalSearch />
					<StredSearch
						showReddit={searchAppController.showReddit}
						setShowReddit={searchAppController.setShowReddit}
						showSO={searchAppController.showSO}
						setShowSO={searchAppController.setShowSO}
						soSearchData={searchAppController.soSearchData}
						setSoSearchData={searchAppController.setSoSearchData}
						redditSearchData={searchAppController.redditSearchData}
						setRedditSearchData={
							searchAppController.setRedditSearchData
						}
						setSoSearchResults={
							searchAppController.setSoSearchResults
						}
						setRedditSearchResults={
							searchAppController.setRedditSearchResults
						}
						searchButtonActive={searchButtonActive}
						setSearchButtonActive={setSearchButtonActive}
					/>

					<SearchResultsContainer
						soSearchResults={searchAppController.soSearchResults}
						redditSearchResults={
							searchAppController.redditSearchResults
						}
						setSearchButtonActive={setSearchButtonActive}
						searchButtonActive={searchButtonActive}
					/>
				</div>
			</div>
		</>
	);
}
