import { useEffect, useState } from "react";
import Axios from "axios";
import "./SearchAppComponentsStyle.css";

import SoRedditPicker from "./SO-RedditPicker";
import StackOptions from "./StackOptions";
import RedditOptions from "./RedditOptions";
import SearchOptionsHeader from "./generic-components/search-options-header";
import SearchButton from "./SearchButton";

export default function StredSearch({
	showReddit,
	setShowReddit,
	showSO,
	setShowSO,
	soSearchData,
	setSoSearchData,
	redditSearchData,
	setRedditSearchData,
	setSoSearchResults,
	setRedditSearchResults,
	searchButtonActive,
	setSearchButtonActive,
}) {
	const soCheckHandler = () => {
		setShowSO(!showSO);
	};

	const redditCheckHandler = () => {
		setShowReddit(!showReddit);
	};

	return (
		<div className="stredsearch-container">
			<div className="container">
				<SearchOptionsHeader
					title={"Search Live Data on Stackoverflow and Reddit"}
					headerType={1}
				/>
				<SearchOptionsHeader title={"Select Search Options"} />
				<SoRedditPicker
					showSO={showSO}
					showReddit={showReddit}
					soCheckHandler={soCheckHandler}
					redditCheckHandler={redditCheckHandler}
				/>
			</div>
			{showSO && (
				<StackOptions
					soSearchData={soSearchData}
					setSoSearchData={setSoSearchData}
					searchButtonActive={searchButtonActive}
				/>
			)}
			{showReddit && (
				<RedditOptions
					redditSearchData={redditSearchData}
					setRedditSearchData={setRedditSearchData}
					searchButtonActive={searchButtonActive}
				/>
			)}
			<SearchButton
				showReddit={showReddit}
				showSO={showSO}
				setSoSearchResults={setSoSearchResults}
				setRedditSearchResults={setRedditSearchResults}
				soSearchData={soSearchData}
				redditSearchData={redditSearchData}
				searchButtonActive={searchButtonActive}
				setSearchButtonActive={setSearchButtonActive}
			/>
		</div>
	);
}
