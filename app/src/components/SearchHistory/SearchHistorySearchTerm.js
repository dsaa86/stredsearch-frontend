import SearchOptionsHeader from "../generic-components/search-options-header";

import { prettifyString } from "../functions/GenericFunctions";
import retrieveSearchResultsForTerm from "../functions/SearchHistoryAdditionalFunctions/RetrieveSearchResultsForTerm";

export default function SearchHistorySearchTerm({
	searchHistoryController,
	term,
	token,
}) {
	const searchTermClickHandler = (term) => {
		retrieveSearchResultsForTerm(searchHistoryController, term, token);
	};

	return (
		<div className="row">
			<div className="col-md-4 col-6">
				<div className="search-history-term">
					<span onClick={() => searchTermClickHandler(term)}>
						<SearchOptionsHeader
							title={prettifyString(term, true)}
							headerType={4}
						/>
					</span>
				</div>
			</div>
		</div>
	);
}
