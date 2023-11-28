import "./SearchAppComponentsStyle.css";

import RedditOptions from "./RedditOptions";
import SoRedditPicker from "./SO-RedditPicker";
import SearchButton from "./SearchButton";
import StackOptions from "./StackOptions";
import SearchOptionsHeader from "./generic-components/search-options-header";

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
