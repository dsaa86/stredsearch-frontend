import { useEffect, useState } from "react";
import axios from "axios";
import "./SearchAppComponentsStyle.css";

import SearchOptionsHeader from "./generic-components/search-options-header";
import LocalSearchFields from "./local-search/LocalSearchFields";
import { queryLocalSearch } from "./functions/SearchFunctions";
import SearchResultsContainer from "./SearchResultsContainer";

export default function LocalSearch() {
	let stackCancelTokenSource;
	let redditCancelTokenSource;
	const [soLocalSearchData, setSoLocalSearchData] = useState({});
	const [redditLocalSearchData, setRedditLocalSearchData] = useState({});
	const [searchBoxValue, setSearchBoxValue] = useState("");
	const [searchButtonActive, setSearchButtonActive] = useState(true);

	const localSearchButtonHandler = () => {
		if (stackCancelTokenSource) {
			stackCancelTokenSource.cancel("Operation canceled by the user.");
		}
		stackCancelTokenSource = axios.CancelToken.source();

		if (redditCancelTokenSource) {
			redditCancelTokenSource.cancel("Operation canceled by the user.");
		}
		redditCancelTokenSource = axios.CancelToken.source();

		const stackSearchDataReturned = queryLocalSearch(
			searchBoxValue,
			"stackoverflow",
			stackCancelTokenSource.token,
			setSoLocalSearchData,
		);

		const redditSearchDataReturned = queryLocalSearch(
			searchBoxValue,
			"reddit",
			redditCancelTokenSource.token,
			setRedditLocalSearchData,
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
				setSearchBoxValue={setSearchBoxValue}
			/>
			<SearchResultsContainer
				soSearchResults={soLocalSearchData}
				redditSearchResults={redditLocalSearchData}
				setSearchButtonActive={setSearchButtonActive}
				searchButtonActive={searchButtonActive}
			/>
		</div>
	);
}
