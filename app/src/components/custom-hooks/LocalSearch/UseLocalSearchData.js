import { useState } from "react";

const useLocalSearchData = () => {
	const [soLocalSearchData, setSoLocalSearchData] = useState({});
	const [redditLocalSearchData, setRedditLocalSearchData] = useState({});
	const [searchBoxValue, setSearchBoxValue] = useState("");
	const [searchButtonActive, setSearchButtonActive] = useState(true);

	return {
		soLocalSearchData: soLocalSearchData,
		setSoLocalSearchData: setSoLocalSearchData,
		redditLocalSearchData: redditLocalSearchData,
		setRedditLocalSearchData: setRedditLocalSearchData,
		searchBoxValue: searchBoxValue,
		setSearchBoxValue: setSearchBoxValue,
		searchButtonActive: searchButtonActive,
		setSearchButtonActive: setSearchButtonActive,
	};
};

export default useLocalSearchData;
