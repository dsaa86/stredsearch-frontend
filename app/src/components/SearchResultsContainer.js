import "./SearchAppComponentsStyle.css";

import RedditSearchResultsContainer from "./RedditSearchResultsContainer";
import StackSearchResultsContainer from "./StackSearchResultsContainer";

export default function SearchResultsContainer({
	soSearchResults,
	redditSearchResults,
	setSearchButtonActive,
	searchButtonActive,
}) {
	// const redditLoadingAnimationHook = useLoadingAnimation(
	// 	soSearchResults,
	// 	setSearchButtonActive,
	// 	searchButtonActive,
	// );

	// const stackLoadingAnimationHook = useLoadingAnimation(
	// 	redditSearchResults,
	// 	setSearchButtonActive,
	// 	searchButtonActive,
	// );

	return (
		<div
			id="search-results-container"
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
