import { useEffect } from "react";
import SearchHistory from "./SearchHistory";

import { handleClickOutsideModal } from "../functions/GenericFunctions";

export default function SearchHistoryContainer({
	showSearchHistory,
	setShowSearchHistory,
	searchHistoryController,
}) {
	const clickHandler = (event) => {
		if (event.target.id !== "search-history-div") {
			return;
		}
		handleClickOutsideModal(event, setShowSearchHistory);
	};

	useEffect(() => {
		const element = document.getElementById("search-history-div");
		if (!element) {
			return;
		}
		element.addEventListener("click", clickHandler);

		return () => {
			element.removeEventListener("click", clickHandler);
		};
	}, []);

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
