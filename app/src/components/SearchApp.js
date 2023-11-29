import { useEffect, useState } from "react";
import "./SearchAppComponentsStyle.css";

import StredSearch from "./StredSearch";
import SearchResultsContainer from "./SearchResultsContainer";
import LocalSearch from "./LocalSearch";
import SiteHeader from "./site-header/SiteHeader";
import LoginForm from "./site-header/LoginForm";
import RegisterForm from "./site-header/RegisterForm";

import useRedditSearchData from "./custom-hooks/UseRedditSearchData";
import useStackOverflowSearchData from "./custom-hooks/UseStackOverflowSearchData";
import useStredSearchAuth from "./custom-hooks/UseStredSearchAuth";

export default function SearchApp() {
	const redditSearchController = useRedditSearchData();
	const soSearchController = useStackOverflowSearchData();
	const stredSearchAuthController = useStredSearchAuth();
	const [searchButtonActive, setSearchButtonActive] = useState(true);

	return (
		<>
			<div className="search-app-container">
				(stredSearchAuthController.showRegisterForm ||
				stredSearchAuthController.showLoginForm) && (
				<div
					className={
						(stredSearchAuthController.showLoginForm ||
							stredSearchAuthController.showRegisterForm) &&
						"login-register-form-holder"
					}
				>
					{stredSearchAuthController.showRegisterForm && (
						<>
							<RegisterForm
								setLoginStatus={
									stredSearchAuthController.setLoginStatus
								}
								setShowRegisterForm={
									stredSearchAuthController.setShowRegisterForm
								}
								userDetails={
									stredSearchAuthController.userDetails
								}
								setUserDetails={
									stredSearchAuthController.setUserDetails
								}
							/>
						</>
					)}
					{stredSearchAuthController.showLoginForm && (
						<>
							<LoginForm
								setLoginStatus={
									stredSearchAuthController.setLoginStatus
								}
								setShowLoginForm={
									stredSearchAuthController.setShowLoginForm
								}
								userDetails={
									stredSearchAuthController.userDetails
								}
								setUserDetails={
									stredSearchAuthController.setUserDetails
								}
							/>
						</>
					)}
				</div>
				)
				<div className="search-functions-container">
					<SiteHeader
						loginStatus={stredSearchAuthController.loginStatus}
						setLoginStatus={
							stredSearchAuthController.setLoginStatus
						}
						setShowLoginForm={
							stredSearchAuthController.setShowLoginForm
						}
						setShowRegisterForm={
							stredSearchAuthController.setShowRegisterForm
						}
						userDetails={stredSearchAuthController.userDetails}
					/>
					<LocalSearch />
					<StredSearch
						showReddit={redditSearchController.showReddit}
						setShowReddit={redditSearchController.setShowReddit}
						showSO={soSearchController.showSO}
						setShowSO={soSearchController.setShowSO}
						soSearchData={soSearchController.soSearchData}
						setSoSearchData={soSearchController.setSoSearchData}
						redditSearchData={
							redditSearchController.redditSearchData
						}
						setRedditSearchData={
							redditSearchController.setRedditSearchData
						}
						setSoSearchResults={
							soSearchController.setSoSearchResults
						}
						setRedditSearchResults={
							redditSearchController.setRedditSearchResults
						}
						searchButtonActive={searchButtonActive}
						setSearchButtonActive={setSearchButtonActive}
					/>

					<SearchResultsContainer
						soSearchResults={soSearchController.soSearchResults}
						redditSearchResults={
							redditSearchController.redditSearchResults
						}
						setSearchButtonActive={setSearchButtonActive}
						searchButtonActive={searchButtonActive}
					/>
				</div>
			</div>
		</>
	);
}
