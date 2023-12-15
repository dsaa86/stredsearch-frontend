import getSearchResultsForTermFromDB from "./GetSearchResultsForTermFromDB";

const retrieveSearchResultsForTerm = (
	searchHistoryController,
	term,
	loginToken,
) => {
	searchHistoryController.setSearchHistoryData([]);

	getSearchResultsForTermFromDB(term, loginToken)
		.then((response) => {
			searchHistoryController.setSearchHistoryData(response.response);
		})
		.catch((error) => {
			console.log(error);
		});
};

export default retrieveSearchResultsForTerm;
