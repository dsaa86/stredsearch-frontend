import { useState, useEffect } from "react";

const useSearchAppController = () => {
	const [soSearchData, setSoSearchData] = useState([]);
	const [redditSearchData, setRedditSearchData] = useState([]);

	const [showReddit, setShowReddit] = useState(false);
	const [showSO, setShowSO] = useState(false);

	const [soSearchResults, setSoSearchResults] = useState([]);
	const [redditSearchResults, setRedditSearchResults] = useState([]);

	const [loginStatus, setLoginStatus] = useState(false);
	const [userDetails, setUserDetails] = useState(false);
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
		userDetails: userDetails,
		setUserDetails: setUserDetails,
		showLoginForm: showLoginForm,
		setShowLoginForm: setShowLoginForm,
		showRegisterForm: showRegisterForm,
		setShowRegisterForm: setShowRegisterForm,
	};
};

export default useSearchAppController;
