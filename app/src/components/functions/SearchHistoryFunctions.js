import retrieveSearchHistory from "../functions/SearchHistoryAdditionalFunctions/RetrieveSearchHistory";

const showSearchHistory = (authController, searchHistoryController) => {
	if (authController.loginStatus) {
		const loginToken = sessionStorage.getItem("token");

		// Fetch search history from db

		// Organise and pass search history to SearchHistoryContainer

		if (sessionStorage.getItem("token") == null) {
			return { success: false, response: "No token found." };
		}

		retrieveSearchHistory()
			.then((response) => {
				searchHistoryController.setSearchHistory(response.response);
				authController.setShowSearchHistory(true);
			})
			.catch((error) => {
				console.log(error);
			});
	}
};

export default showSearchHistory;
