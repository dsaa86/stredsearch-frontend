import SearchResultsContainer from "./SearchResultsContainer";
import { performLocalSearch } from "./functions/LocalSearchFunctions";
import SearchOptionsHeader from "./generic-components/search-options-header";
import LocalSearchFields from "./local-search/LocalSearchFields";

import useLocalSearchData from "./custom-hooks/LocalSearch/UseLocalSearchData";

export default function LocalSearch() {
	const localSearchData = useLocalSearchData();
	let stackCancelTokenSource;
	let redditCancelTokenSource;

	const localSearchButtonHandler = () => {
		performLocalSearch(
			stackCancelTokenSource,
			redditCancelTokenSource,
			localSearchData.searchBoxValue,
			localSearchData.setSoLocalSearchData,
			localSearchData.setRedditLocalSearchData,
		);
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<SearchOptionsHeader
						title={"Search Cached Data"}
						headerType={1}
					/>
				</div>
			</div>
			<LocalSearchFields
				localSearchButtonHandler={localSearchButtonHandler}
				setSearchBoxValue={localSearchData.setSearchBoxValue}
			/>
			<SearchResultsContainer
				soSearchResults={localSearchData.soLocalSearchData}
				redditSearchResults={localSearchData.redditLocalSearchData}
				setSearchButtonActive={localSearchData.setSearchButtonActive}
				searchButtonActive={localSearchData.searchButtonActive}
			/>
		</div>
	);
}
