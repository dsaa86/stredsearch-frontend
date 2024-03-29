const decodeSearchTerms = (searchHistoryController) => {
	let searchTerms = [];
	searchHistoryController.searchHistory.map((term) => {
		if (term.search_term === null || term.search_term === undefined) {
			return;
		}
		// The objects returned from Django are a bit funky. This decodes them appropriately, but server-side refactoring is necessary in order to optimise this code.
		const termValues = Object.entries(term);
		termValues.forEach(([key, value]) => {
			if (
				value === null ||
				value === undefined ||
				value.search_term === " " ||
				value.search_term === "" ||
				(key !== "search_term" && typeof value !== "object")
			) {
				return;
			}
			searchTerms.push(value.search_term);
		});
	});

	return [...new Set(searchTerms)];
};

export default decodeSearchTerms;
