import { useEffect, useState } from "react";

const useSearchHistory = () => {
	const [searchHistory, setSearchHistory] = useState([]);
	const [searchHistoryData, setSearchHistoryData] = useState([]);

	useEffect(() => {}, [searchHistory, searchHistoryData]);

	return {
		searchHistory: searchHistory,
		setSearchHistory: setSearchHistory,
		searchHistoryData: searchHistoryData,
		setSearchHistoryData: setSearchHistoryData,
	};
};

export default useSearchHistory;
