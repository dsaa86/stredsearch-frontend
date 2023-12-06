import { useState, useEffect } from "react";

const useStackOverflowSearchData = () => {
	const [soSearchData, setSoSearchData] = useState([]);
	const [showSO, setShowSO] = useState(false);
	const [soSearchResults, setSoSearchResults] = useState([]);

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
			token: sessionStorage.getItem("token"),
		});
	}, []);

	return {
		soSearchData: soSearchData,
		setSoSearchData: setSoSearchData,
		showSO: showSO,
		setShowSO: setShowSO,
		soSearchResults: soSearchResults,
		setSoSearchResults: setSoSearchResults,
	};
};

export default useStackOverflowSearchData;
