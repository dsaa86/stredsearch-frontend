const showSearchHistory = (authController) => {
	if (authController.loginStatus) {
		const loginToken = sessionStorage.getItem("token");

		// Fetch search history from db

		// Organise and pass search history to SearchHistoryContainer

		authController.setShowSearchHistory(true);
	}
};

export default showSearchHistory;
