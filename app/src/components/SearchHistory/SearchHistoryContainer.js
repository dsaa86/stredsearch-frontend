import SearchHistory from "./SearchHistory";

export default function SearchHistoryContainer({ searchHistoryController }) {
	return (
		<div id="search-history-container">
			<SearchHistory searchHistoryController={searchHistoryController} />
		</div>
	);
}
