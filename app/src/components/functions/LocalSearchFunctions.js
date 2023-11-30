import axios from "axios";

export const performLocalSearch = (
	stackCancelTokenSource,
	redditCancelTokenSource,
	searchBoxValue,
	setSoLocalSearchData,
	setRedditLocalSearchData,
) => {
	if (stackCancelTokenSource) {
		stackCancelTokenSource.cancel("Operation canceled by the user.");
	}
	stackCancelTokenSource = axios.CancelToken.source();

	if (redditCancelTokenSource) {
		redditCancelTokenSource.cancel("Operation canceled by the user.");
	}
	redditCancelTokenSource = axios.CancelToken.source();

	queryLocalSearch(
		searchBoxValue,
		"stackoverflow",
		stackCancelTokenSource.token,
		setSoLocalSearchData,
	);

	queryLocalSearch(
		searchBoxValue,
		"reddit",
		redditCancelTokenSource.token,
		setRedditLocalSearchData,
	);
};

const queryLocalSearch = async (
	searchParameter,
	dataSourceToSearch,
	cancelToken,
	setSearchResults,
) => {
	const url = `http://localhost:8000/search/${dataSourceToSearch}/?search=${searchParameter}`;

	const response = await axios
		.get(url, {
			cancelToken: cancelToken,
		})
		.then((data) => {
			return handleSuccessfulResponse(
				data,
				setSearchResults,
				dataSourceToSearch,
			);
		})
		.catch((error) => {
			return handleErrorResponse(error);
		});
};

const handleSuccessfulResponse = (data, setSearchResults, dataToSearch) => {
	if (dataToSearch === "reddit") {
		let redditDataCorrectedFieldTitles = [];
		data.data.forEach((item) => {
			const itemWithUpdatedFieldTitles = {
				question_title: item.title,
				question_link: item.link,
			};

			redditDataCorrectedFieldTitles.push(itemWithUpdatedFieldTitles);
		});
		setSearchResults(redditDataCorrectedFieldTitles);
		return true;
	}

	setSearchResults(data.data);
	return true;
};

const handleErrorResponse = (error) => {
	if (axios.isCancel(error)) {
		console.log("Request Cancelled: ", error.message);
	} else {
		console.log(error);
	}
	return false;
};
