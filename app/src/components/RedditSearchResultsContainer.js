import { useEffect, useState, useRef } from "react";
import "./SearchAppComponentsStyle.css";

import RedditResponseContainer from "./response-components/reddit/RedditResponseContainer";
import SearchOptionsHeader from "./generic-components/search-options-header";
import LoadingAnimation from "./generic-components/LoadingAnimation";

export default function RedditSearchResultsContainer({
	redditSearchResults,
	setSearchButtonActive,
	searchButtonActive,
}) {
	const [showLoadingAnimation, setShowLoadingAnimation] = useState(false);
	const redditFirstRender = useRef(true);

	useEffect(() => {
		if (redditFirstRender) {
			setShowLoadingAnimation(false);
		}
	}, []);

	useEffect(() => {
		if (redditSearchResults.length > 0 && searchButtonActive) {
			setShowLoadingAnimation(false);
		} else if (redditFirstRender.current) {
			setShowLoadingAnimation(false);
		} else if (!searchButtonActive) {
			setShowLoadingAnimation(true);
		}

		redditFirstRender.current = false;
	}, [searchButtonActive, redditSearchResults]);

	useEffect(() => {
		redditSearchResults.length > 0 && setSearchButtonActive(true);
	}, [redditSearchResults]);

	useEffect(() => {}, [searchButtonActive]);

	return showLoadingAnimation ? (
		<div className="col-sm-12 col-xl-6 reddit-search-results-container">
			<div className="row">
				<div className="col-12">
					<SearchOptionsHeader title={"Reddit Results"} />
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<LoadingAnimation />
				</div>
			</div>
		</div>
	) : (
		redditSearchResults.length > 0 && (
			<div className="col-sm-12 col-xl-6 reddit-search-results-container">
				<div className="row">
					<div className="col-12">
						<SearchOptionsHeader title={"Reddit Results"} />
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						{redditSearchResults.length > 0 &&
							redditSearchResults.map((question, index) => {
								return (
									<RedditResponseContainer
										question={question}
										index={index}
										key={question.question_id}
									/>
								);
							})}
					</div>
				</div>
			</div>
		)
	);
}