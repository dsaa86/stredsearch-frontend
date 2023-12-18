import SearchHistorySearchResult from "./SearchHistorySearchResult";

export default function SearchHistorySearchResultRow({ searchResult }) {
	const redditTestRegExp = /reddit.com/;
	const stackTestRegExp = /stackoverflow.com/;

	return (
		<>
			<div
				className="row"
				style={{ paddingBottom: "20px;" }}
			>
				<div className="col-12 search-history-search-result">
					{redditTestRegExp.test(searchResult.link) && (
						<SearchHistorySearchResult
							destination={"reddit"}
							searchResult={searchResult}
						/>
					)}
					{stackTestRegExp.test(searchResult.link) && (
						<SearchHistorySearchResult
							destination={"stack"}
							searchResult={searchResult}
						/>
					)}
				</div>
			</div>
		</>
	);
}
