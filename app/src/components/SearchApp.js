import { useEffect, useState } from "react";
import "./SearchAppComponentsStyle.css";

import StredSearch from "./StredSearch";
import SearchResultsContainer from "./SearchResultsContainer";
import LocalSearch from "./LocalSearch";

const useSearchAppController = () => {
	const [soSearchData, setSoSearchData] = useState([]);
	const [redditSearchData, setRedditSearchData] = useState([]);

	const [showReddit, setShowReddit] = useState(false);
	const [showSO, setShowSO] = useState(false);

	const [soSearchResults, setSoSearchResults] = useState([]);
	const [redditSearchResults, setRedditSearchResults] = useState([]);

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
	};
};

export default function SearchApp() {
	const searchAppController = useSearchAppController();
	const [searchButtonActive, setSearchButtonActive] = useState(true);
	return (
		<>
			<div className="search-app-container">
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
					setSoSearchResults={searchAppController.setSoSearchResults}
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
		</>
	);
}
