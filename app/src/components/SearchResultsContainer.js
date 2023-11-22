import { useEffect, useState } from "react";
import "./SearchAppComponentsStyle.css";

import StackSearchResultsContainer from "./StackSearchResultsContainer";
import RedditSearchResultsContainer from "./RedditSearchResultsContainer";

export default function SearchResultsContainer({
	soSearchResults,
	redditSearchResults,
	setSearchButtonActive,
	searchButtonActive,
}) {
	return (
		<div
			id=""
			className="container search-results-container"
		>
			<div className="row">
				<StackSearchResultsContainer
					soSearchResults={soSearchResults}
					setSearchButtonActive={setSearchButtonActive}
					searchButtonActive={searchButtonActive}
				/>
				<RedditSearchResultsContainer
					redditSearchResults={redditSearchResults}
					setSearchButtonActive={setSearchButtonActive}
					searchButtonActive={searchButtonActive}
				/>
			</div>
		</div>
	);
}
