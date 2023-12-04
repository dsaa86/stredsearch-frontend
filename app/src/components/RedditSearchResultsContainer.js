import { useEffect, useState, useRef } from "react";
import "./SearchAppComponentsStyle.css";

import RedditResponseContainer from "./response-components/reddit/RedditResponseContainer";
import SearchOptionsHeader from "./generic-components/search-options-header";
import LoadingAnimationContainer from "./generic-components/LoadingAnimationContainer";

import useLoadingAnimation from "./custom-hooks/StackSearch-Reddit-ResultsContainer/UseLoadingAnimation";

export default function RedditSearchResultsContainer({
	redditSearchResults,
	setSearchButtonActive,
	searchButtonActive,
}) {
	const useLoadingAnimationHook = useLoadingAnimation(
		redditSearchResults,
		setSearchButtonActive,
		searchButtonActive,
	);

	return useLoadingAnimationHook.showLoadingAnimation ? (
		<LoadingAnimationContainer title={"Reddit Results"} />
	) : (
		useLoadingAnimationHook.searchResults.length > 0 && (
			<div className="col-sm-12 col-xl-6 reddit-search-results-container">
				<div className="row">
					<div className="col-12">
						<SearchOptionsHeader title={"Reddit Results"} />
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						{useLoadingAnimationHook.searchResults.length > 0 &&
							useLoadingAnimationHook.searchResults.map(
								(question, index) => {
									return (
										<RedditResponseContainer
											question={question}
											index={index}
											key={question.question_id}
										/>
									);
								},
							)}
					</div>
				</div>
			</div>
		)
	);
}
