import { useEffect, useState } from "react";
import "./SearchAppComponentsStyle.css";

import SearchOptionsHeader from "./generic-components/search-options-header";
import RedditSearchQuery from "./redditoptions-components/RedditSearchQuery";
import RedditSubReddits from "./redditoptions-components/RedditSubreddits";
import RedditSearchBy from "./redditoptions-components/RedditSearchBy";

export default function RedditOptions({
	redditSearchData,
	setRedditSearchData,
	searchButtonActive,
}) {
	useEffect(() => {}, [searchButtonActive]);

	return (
		<div
			className="container reddit-options-container"
			style={
				searchButtonActive === false
					? { pointerEvents: "none" }
					: { pointerEvents: "auto" }
			}
		>
			<SearchOptionsHeader title={"Reddit Search Options"} />
			<RedditSearchQuery
				redditSearchData={redditSearchData}
				setRedditSearchData={setRedditSearchData}
			/>
			<RedditSubReddits
				redditSearchData={redditSearchData}
				setRedditSearchData={setRedditSearchData}
			/>
			<RedditSearchBy
				redditSearchData={redditSearchData}
				setRedditSearchData={setRedditSearchData}
			/>
		</div>
	);
}
