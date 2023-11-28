import { useEffect, useState } from "react";
import "./SearchAppComponentsStyle.css";

import StredSearch from "./StredSearch";
import SearchResultsContainer from "./SearchResultsContainer";
import LocalSearch from "./LocalSearch";
import SiteHeader from "./site-header/SiteHeader";
import LoginForm from "./site-header/LoginForm";
import RegisterForm from "./site-header/RegisterForm";

const useSearchAppController = () => {
	const [soSearchData, setSoSearchData] = useState([]);
	const [redditSearchData, setRedditSearchData] = useState([]);

	const [showReddit, setShowReddit] = useState(false);
	const [showSO, setShowSO] = useState(false);

	const [soSearchResults, setSoSearchResults] = useState([]);
	const [redditSearchResults, setRedditSearchResults] = useState([]);

	const [loginStatus, setLoginStatus] = useState(false);
	const [showLoginForm, setShowLoginForm] = useState(false);
	const [showRegisterForm, setShowRegisterForm] = useState(false);

	useEffect(() => {
		setSoSearchData({
			category: "questions",
			route: "question_by_tag",
			page: "1",
			pagesize: "50",
			from_date: "",
			to_date: "",
			resultsSort: "activity",
			order: "desc",
			tagged: "",
			site: "stackoverflow",
			nottagged: "",
			intitle: "",
			user: "",
			query: "",
			body: "",
			accepted: false,
			closed: false,
			migrated: false,
			wiki: false,
		});
	}, []);

	useEffect(() => {
		setRedditSearchData({
			query: "",
			subreddit: "",
			search_by: "link",
		});
	}, []);

	useEffect(() => {
		const keyPressHandler = (event) => {
			if (event.key == "Escape") {
				event.preventDefault();
				setShowLoginForm(false);
				setShowRegisterForm(false);
			}
		};

		document.addEventListener("keydown", keyPressHandler);

		return () => {
			document.removeEventListener("keydown", keyPressHandler);
		};
	}, []);

	return {
		soSearchData: soSearchData,
		setSoSearchData: setSoSearchData,
		redditSearchData: redditSearchData,
		setRedditSearchData: setRedditSearchData,
		showReddit: showReddit,
		setShowReddit: setShowReddit,
		showSO: showSO,
		setShowSO: setShowSO,
		soSearchResults: soSearchResults,
		setSoSearchResults: setSoSearchResults,
		redditSearchResults: redditSearchResults,
		setRedditSearchResults: setRedditSearchResults,
		loginStatus: loginStatus,
		setLoginStatus: setLoginStatus,
		showLoginForm: showLoginForm,
		setShowLoginForm: setShowLoginForm,
		showRegisterForm: showRegisterForm,
		setShowRegisterForm: setShowRegisterForm,
	};
};

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
							/>
						</>
					)}
					{searchAppController.showLoginForm && (
						<>
							<LoginForm
								setLoginStatus={
									searchAppController.setLoginStatus
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
