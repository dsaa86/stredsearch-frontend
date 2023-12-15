import axios from "axios";

const getSearchResultsForTermFromDB = async (term, loginToken) => {
	// const loginToken = sessionStorage.getItem("token");
	const url = `http://localhost:8000/searchhistory/retrieve-search-results/${loginToken}/${term}/`;

	const response = await axios.get(url);

	if (response.status === 200) {
		return { success: true, response: response.data };
	}
	return { success: false, response: response.data };
};

export default getSearchResultsForTermFromDB;
