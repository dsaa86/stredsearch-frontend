import { useEffect } from "react";
import "./SearchAppComponentsStyle.css";

import SearchOptionsHeader from "./generic-components/search-options-header";
import RedditSearchBy from "./redditoptions-components/RedditSearchBy";
import RedditSearchTextInput from "./redditoptions-components/RedditSearchTextInput";

export default function RedditOptions({
	redditSearchData,
	setRedditSearchData,
	searchButtonActive,
}) {
	useEffect(() => {}, [searchButtonActive]);

	const handleInputChangeSubReddit = (e) => {
		setRedditSearchData({ ...redditSearchData, subreddit: e.target.value });
	};

	const handleInputChangeQuery = (e) => {
		setRedditSearchData({ ...redditSearchData, query: e.target.value });
	};

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
			<RedditSearchTextInput
				identifier={"search-query"}
				handleInputChange={handleInputChangeQuery}
			/>
			<RedditSearchTextInput
				identifier={"search-subreddit"}
				handleInputChange={handleInputChangeSubReddit}
			/>
			<RedditSearchBy
				redditSearchData={redditSearchData}
				setRedditSearchData={setRedditSearchData}
			/>
		</div>
	);
}
