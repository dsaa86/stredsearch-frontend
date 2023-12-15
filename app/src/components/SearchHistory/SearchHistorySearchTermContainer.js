import decodeSearchTerms from "../functions/SearchHistoryAdditionalFunctions/DecodeSearchTerms";

import SearchHistoryModalTitle from "./SearchHistoryModalTitle";
import SearchHistorySearchTerm from "./SearchHistorySearchTerm";

export default function SearchHistorySearchTermContainer({
	searchHistoryController,
}) {
	const searchTerms = decodeSearchTerms(searchHistoryController);
	return (
		<div
			className="container"
			style={{ width: "100%" }}
		>
			<SearchHistoryModalTitle />
			{searchTerms.map((term) => {
				return (
					<SearchHistorySearchTerm
						searchHistoryController={searchHistoryController}
						term={term}
						token={sessionStorage.getItem("token")}
					/>
				);
			})}
		</div>
	);
}
