import { useState, useEffect } from "react";

const useRedditSearchData = () => {
	const [redditSearchData, setRedditSearchData] = useState([]);
	const [showReddit, setShowReddit] = useState(false);
	const [redditSearchResults, setRedditSearchResults] = useState([]);

	useEffect(() => {
		setRedditSearchData({
			query: "",
			subreddit: "",
			search_by: "link",
		});
	}, []);

	return {
		redditSearchData: redditSearchData,
		setRedditSearchData: setRedditSearchData,
		showReddit: showReddit,
		setShowReddit: setShowReddit,
		redditSearchResults: redditSearchResults,
		setRedditSearchResults: setRedditSearchResults,
	};
};

export default useRedditSearchData;
