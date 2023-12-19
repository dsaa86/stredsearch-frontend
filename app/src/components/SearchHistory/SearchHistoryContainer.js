import SearchHistory from "./SearchHistory";
import UseModalVisibility from "../custom-hooks/LoginFormRegisterFormSearchHistory/UseModalVisibility";

export default function SearchHistoryContainer({
	showSearchHistory,
	setShowSearchHistory,
	searchHistoryController,
}) {
	const useModalVisibility = UseModalVisibility(
		setShowSearchHistory,
		"search-history-div",
	);

	return (
		<div id="search-history-div">
			<div id="search-history-container">
				<SearchHistory
					searchHistoryController={searchHistoryController}
				/>
			</div>
		</div>
	);
}
