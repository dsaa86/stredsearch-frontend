import SearchHistorySearchResultsContainer from "./SearchHistorySearchResultsContainer";
import SearchHistorySearchTermContainer from "./SearchHistorySearchTermContainer";

export default function SearchHistory({ searchHistoryController }) {
	return (
		<>
			<SearchHistorySearchTermContainer
				searchHistoryController={searchHistoryController}
			/>
			<SearchHistorySearchResultsContainer
				searchHistoryController={searchHistoryController}
			/>
		</>
	);
}
