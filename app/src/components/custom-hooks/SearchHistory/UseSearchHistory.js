import { useEffect, useState } from "react";

const useSearchHistory = () => {
	const [searchHistory, setSearchHistory] = useState([]);
	const [searchHistoryData, setSearchHistoryData] = useState([]);

	useEffect(() => {}, [searchHistoryData]);
	useEffect(() => {}, [searchHistory]);

	return {
		searchHistory: searchHistory,
		setSearchHistory: setSearchHistory,
		searchHistoryData: searchHistoryData,
		setSearchHistoryData: setSearchHistoryData,
	};
};

export default useSearchHistory;
