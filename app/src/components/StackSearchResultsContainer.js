import "./SearchAppComponentsStyle.css";

import LoadingAnimation from "./generic-components/LoadingAnimation";
import SearchOptionsHeader from "./generic-components/search-options-header";
import StackResponseContainer from "./response-components/stackoverflow/StackResponseContainer";

import useLoadingAnimation from "./custom-hooks/StackSearch-Reddit-ResultsContainer/UseLoadingAnimation";

export default function StackSearchResultsContainer({
	soSearchResults,
	setSearchButtonActive,
	searchButtonActive,
}) {
	const useLoadingAnimationHook = useLoadingAnimation(
		soSearchResults,
		setSearchButtonActive,
		searchButtonActive,
	);

	return useLoadingAnimationHook.showLoadingAnimation ? (
		<div className="col-sm-12 col-xl-6 stack-search-results-container">
			<div className="row">
				<div className="col-12">
					<SearchOptionsHeader title={"Stack Overflow Results"} />
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<LoadingAnimation />
				</div>
			</div>
		</div>
	) : (
		useLoadingAnimationHook.searchResults.length > 0 && (
			<div className="col-sm-12 col-xl-6 stack-search-results-container">
				<div className="row">
					<div className="col-12">
						<SearchOptionsHeader title={"Stack Overflow Results"} />
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						{useLoadingAnimationHook.searchResults.length > 0 ? (
							useLoadingAnimationHook.searchResults.map(
								(question, index) => {
									return (
										<StackResponseContainer
											question={question}
											index={index}
											key={question.question_id}
										/>
									);
								},
							)
						) : (
							<div>No Results Found</div>
						)}
					</div>
				</div>
			</div>
		)
	);
}
