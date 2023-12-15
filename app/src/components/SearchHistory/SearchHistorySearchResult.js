import SearchOptionsHeader from "../generic-components/search-options-header";

import openResultInNewWindow from "../functions/SearchHistoryAdditionalFunctions/OpenResultInNewWindow";

export default function SearchHistorySearchResult({
	destination,
	searchResult,
}) {
	const searchResultClickHandler = (link) => {
		openResultInNewWindow(link);
	};

	return (
		<div
			className={`search-history-${destination}-result`}
			onClick={() => searchResultClickHandler(searchResult.link)}
		>
			<SearchOptionsHeader
				title={searchResult.title}
				headerType={6}
			/>
		</div>
	);
}
