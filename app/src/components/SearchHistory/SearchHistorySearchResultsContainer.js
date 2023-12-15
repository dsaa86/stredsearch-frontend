import SearchHistorySearchResultRow from "./SearchHistorySearchResultRow";

export default function SearchHistorySearchResultsContainer({
	searchHistoryController,
}) {
	return (
		<>
			{searchHistoryController.searchHistoryProcessedData.length > 0 && (
				<div
					className="container"
					id="search-history-results-container"
				>
					{searchHistoryController.searchHistoryProcessedData.map(
						(searchResult) => {
							return (
								<SearchHistorySearchResultRow
									searchResult={searchResult}
								/>
							);
						},
					)}
				</div>
			)}
		</>
	);
}
