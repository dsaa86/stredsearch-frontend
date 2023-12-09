import { useState } from "react";

import LocalSearch from "./LocalSearch";
import SearchResultsContainer from "./SearchResultsContainer";
import StredSearch from "./StredSearch";
import LoginForm from "./site-header/LoginForm";
import RegisterForm from "./site-header/RegisterForm";
import SiteHeader from "./site-header/SiteHeader";

import useRedditSearchData from "./custom-hooks/SearchApp/UseRedditSearchData";
import useStackOverflowSearchData from "./custom-hooks/SearchApp/UseStackOverflowSearchData";
import useStredSearchAuth from "./custom-hooks/SearchApp/UseStredSearchAuth";
import SearchHistoryContainer from "./SearchHistory/SearchHistoryContainer";
import useSearchHistory from "./custom-hooks/SearchHistory/UseSearchHistory";

export default function SearchApp() {
	const redditSearchController = useRedditSearchData();
	const soSearchController = useStackOverflowSearchData();
	const stredSearchAuthController = useStredSearchAuth();
	const searchHistoryController = useSearchHistory();
	const [searchButtonActive, setSearchButtonActive] = useState(true);

	return (
		<>
			<div className="search-app-container">
				{(stredSearchAuthController.showRegisterForm ||
					stredSearchAuthController.showLoginForm ||
					stredSearchAuthController.showSearchHistory) && (
					<div
						className={
							(stredSearchAuthController.showLoginForm ||
								stredSearchAuthController.showRegisterForm ||
								stredSearchAuthController.showSearchHistory) &&
							"login-register-form-holder"
						}
					>
						{stredSearchAuthController.showSearchHistory && (
							<SearchHistoryContainer
								showSearchHistory={
									stredSearchAuthController.showSearchHistory
								}
								setShowSearchHistory={
									stredSearchAuthController.setShowSearchHistory
								}
								searchHistoryController={
									searchHistoryController
								}
							/>
						)}
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
				)}
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
						authController={stredSearchAuthController}
						searchHistoryController={searchHistoryController}
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
