import { useEffect, useState } from "react";

const useSearchHistory = () => {
	const [searchHistory, setSearchHistory] = useState([]);
	const [searchHistoryData, setSearchHistoryData] = useState([]);
	const [searchHistoryProcessedData, setSearchHistoryProcessedData] =
		useState([]);

	useEffect(() => {}, [searchHistory]);

	useEffect(() => {
		if (searchHistoryData.length === 0) {
			return;
		}
		processSearchHistoryData();
	}, [searchHistoryData]);

	const processSearchHistoryData = () => {
		if (searchHistoryData[0].reddit_responses.length > 0) {
			setSearchHistoryProcessedData(
				searchHistoryData[0].reddit_responses,
			);
			return;
		}
		if (searchHistoryData[0].stack_responses.length > 0) {
			setSearchHistoryProcessedData(searchHistoryData[0].stack_responses);
			return;
		}
		setSearchHistoryProcessedData(["No results found"]);
		console.log(searchHistoryProcessedData);
		return;
	};

	return {
		searchHistory: searchHistory,
		setSearchHistory: setSearchHistory,
		searchHistoryData: searchHistoryData,
		setSearchHistoryData: setSearchHistoryData,
		searchHistoryProcessedData: searchHistoryProcessedData,
		setSearchHistoryProcessedData: setSearchHistoryProcessedData,
	};
};

export default useSearchHistory;
