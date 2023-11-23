import axios from "axios";

export const validateStackOverflowSearchParams = (soSearchData) => {
	let stackSearchParamsAreValid = {
		response: false,
		invalidFields: [],
	};

	if (soSearchData.route == "question_by_tag") {
		if (soSearchData.tagged.length >= 1) {
			stackSearchParamsAreValid.response = true;
		} else {
			stackSearchParamsAreValid.response = false;
			stackSearchParamsAreValid.invalidFields.push("Tags");
		}
	}
	if (soSearchData.route == "related_questions") {
		if (soSearchData.query.length >= 1) {
			stackSearchParamsAreValid.response = true;
		} else {
			stackSearchParamsAreValid.response = false;
			stackSearchParamsAreValid.invalidFields.push("Query");
		}
	}
	if (soSearchData.route == "search") {
		if (soSearchData.tagged.length >= 1) {
			stackSearchParamsAreValid.response = true;
		} else {
			stackSearchParamsAreValid.response = false;
			stackSearchParamsAreValid.invalidFields.push("Tags");
		}
		if (soSearchData.intitle.length >= 1) {
			stackSearchParamsAreValid.response = true;
		} else {
			stackSearchParamsAreValid.response = false;
			stackSearchParamsAreValid.invalidFields.push("In Title");
		}
	}
	if (soSearchData.route == "advanced-search") {
		if (soSearchData.tagged.length >= 1) {
			stackSearchParamsAreValid.response = true;
		} else {
			stackSearchParamsAreValid.response = false;
			stackSearchParamsAreValid.invalidFields.push("Tags");
		}
		if (soSearchData.intitle.length >= 1) {
			stackSearchParamsAreValid.response = true;
		} else {
			stackSearchParamsAreValid.response = false;
			stackSearchParamsAreValid.invalidFields.push("In Title");
		}
		if (soSearchData.user.length >= 1) {
			stackSearchParamsAreValid.response = true;
		} else {
			stackSearchParamsAreValid.response = false;
			stackSearchParamsAreValid.invalidFields.push("User");
		}
		if (soSearchData.query.length >= 1) {
			stackSearchParamsAreValid.response = true;
		} else {
			stackSearchParamsAreValid.response = false;
			stackSearchParamsAreValid.invalidFields.push("Query");
		}
		if (soSearchData.body.length >= 1) {
			stackSearchParamsAreValid.response = true;
		} else {
			stackSearchParamsAreValid.response = false;
			stackSearchParamsAreValid.invalidFields.push("Body");
		}
	}
	return stackSearchParamsAreValid;
};

export const validateRedditSearchParams = (redditSearchData) => {
	let redditSearchParamsAreValid = {
		response: false,
		invalidFields: [],
	};

	if (redditSearchData.query.length >= 1) {
		redditSearchParamsAreValid.response = true;
	} else {
		redditSearchParamsAreValid.response = false;
		redditSearchParamsAreValid.invalidFields.push("Query");
	}

	if (redditSearchData.subreddit.length >= 1) {
		redditSearchParamsAreValid.response = true;
	} else {
		redditSearchParamsAreValid.response = false;
		redditSearchParamsAreValid.invalidFields.push("Subreddit");
	}

	return redditSearchParamsAreValid;
};

export const queryStackOverflow = (
	cancelToken,
	setSoSearchResults,
	soSearchData,
) => {
	const url = buildStackOverflowURLFromParams(soSearchData);
	asyncRequestStackOverflow(url, cancelToken)
		.then((data) => {
			setSoSearchResults(data);
			return true;
		})
		.catch((error) => {
			if (axios.isCancel(error)) {
				console.log("Request Cancelled: ", error.message);
			} else {
				console.log(error);
			}

			return false;
		});
};

const buildStackOverflowURLFromParams = (soSearchData) => {
	// eliminate pass-by-reference issues by assigning obj primitives to const variables (and perform rudimentary validation at same time)
	const category = soSearchData.category;
	const route = soSearchData.route;
	const page =
		String(soSearchData.page).length >= 1 ? String(soSearchData.page) : "1";
	const pagesize =
		String(soSearchData.pagesize).length >= 1
			? String(soSearchData.pagesize)
			: "50";
	const from_date =
		soSearchData.from_date.length >= 1 ? soSearchData.from_date : " ";
	const to_date =
		soSearchData.to_date.length >= 1 ? soSearchData.to_date : " ";
	const resultsSort = soSearchData.resultsSort;
	const order = soSearchData.order;
	const tagged = soSearchData.tagged.length >= 1 ? soSearchData.tagged : " ";
	const site = soSearchData.site.length >= 1 ? soSearchData.site : " ";
	const nottagged =
		soSearchData.nottagged.length >= 1 ? soSearchData.nottagged : " ";
	const intitle =
		soSearchData.intitle.length >= 1 ? soSearchData.intitle : " ";
	const user = soSearchData.user.length >= 1 ? soSearchData.user : " ";
	const query = soSearchData.query.length >= 1 ? soSearchData.query : " ";
	const body = soSearchData.body.length >= 1 ? soSearchData.body : " ";
	const accepted = soSearchData.accepted === true ? "true" : " ";
	const closed = soSearchData.closed === true ? "true" : " ";
	const migrated = soSearchData.migrated === true ? "true" : " ";
	const wiki = soSearchData.wiki === true ? "true" : " ";

	let url = "";

	if (route === "question_by_tag") {
		url = `http://localhost:8000/stack/get/question_by_tag/${page}/${pagesize}/${from_date}/${to_date}/${order}/${resultsSort}/${tagged}/`;
	} else if (route === "related_questions") {
		url = `http://localhost:8000/stack/get/related_questions/${page}/${pagesize}/${from_date}/${to_date}/${order}/${resultsSort}/${query}/`;
	} else if (route === "search") {
		url = `http://localhost:8000/stack/get/simple_search/${page}/${pagesize}/${from_date}/${to_date}/${order}/${resultsSort}/${nottagged}/${tagged}/${intitle}/`;
	} else if (route === "advanced-search") {
		url = `http://localhost:8000/stack/get/advanced_search/${page}/${pagesize}/${from_date}/${to_date}/${order}/${resultsSort}/${query}/${accepted}/ /${body}/${closed}/${migrated}/ /${nottagged}/${tagged}/${intitle}/${user}/ / /${wiki}/`;
	}

	return url;
};

const asyncRequestStackOverflow = async (url, cancelToken) => {
	const response = await axios.get(url, { cancelToken });
	return response.data;
};

export const queryReddit = (
	cancelToken,
	setRedditSearchResults,
	redditSearchData,
) => {
	const url = buildRedditURLFromParams(redditSearchData);
	console.log(url);
	asyncRequestReddit(url, cancelToken)
		.then((data) => {
			setRedditSearchResults(data);
			return true;
		})
		.catch((error) => {
			if (axios.isCancel(error)) {
				console.log("Request Cancelled: ", error.message);
			} else {
				console.log(error);
			}
			return false;
		});
};

const buildRedditURLFromParams = (redditSearchData) => {
	// eliminate pass-by-reference issues by assigning obj primitives to const variables (and perform rudimentary validation at same time)
	const query =
		redditSearchData.query.length >= 1 ? redditSearchData.query : " ";
	const subreddit =
		redditSearchData.subreddit.length >= 1
			? redditSearchData.subreddit
			: " ";
	const search_by = redditSearchData.search_by;

	return `http://localhost:8000/reddit/get/query/${search_by}/${subreddit}/${query}/100/`;
};

const asyncRequestReddit = async (url, cancelToken) => {
	const response = await axios.get(url, {
		cancelToken: cancelToken,
		timeout: 20000,
	});
	return response.data;
};

export const queryLocalSearch = async (
	searchParameter,
	dataToSearch,
	cancelToken,
	setSearchResults,
) => {
	const url = `http://localhost:8000/search/${dataToSearch}/?search=${searchParameter}`;

	const response = await axios
		.get(url, {
			cancelToken: cancelToken,
		})
		.then((data) => {
			if (dataToSearch === "reddit") {
				let redditDataCorrectedFieldTitles = [];
				data.data.forEach((item) => {
					const itemWithUpdatedFieldTitles = {
						question_title: item.title,
						question_link: item.link,
					};

					redditDataCorrectedFieldTitles.push(
						itemWithUpdatedFieldTitles,
					);
				});
				setSearchResults(redditDataCorrectedFieldTitles);
				return true;
			}

			setSearchResults(data.data);
			return true;
		})
		.catch((error) => {
			if (axios.isCancel(error)) {
				console.log("Request Cancelled: ", error.message);
			} else {
				console.log(error);
			}
			return false;
		});
};
