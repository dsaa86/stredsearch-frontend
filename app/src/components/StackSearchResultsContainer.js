import { useEffect, useState, useRef } from "react";
import "./SearchAppComponentsStyle.css";

import SearchOptionsHeader from "./generic-components/search-options-header";
import StackResponseContainer from "./response-components/stackoverflow/StackResponseContainer";
import LoadingAnimation from "./generic-components/LoadingAnimation";

export default function StackSearchResultsContainer({
	soSearchResults,
	setSearchButtonActive,
	searchButtonActive,
}) {
	const [showLoadingAnimation, setShowLoadingAnimation] = useState(false);
	const soFirstRender = useRef(true);

	useEffect(() => {
		if (soFirstRender) {
			setShowLoadingAnimation(false);
		}
	}, []);

	useEffect(() => {
		if (soSearchResults.length > 0 && searchButtonActive) {
			setShowLoadingAnimation(false);
		} else if (soFirstRender.current) {
			setShowLoadingAnimation(false);
		} else if (!searchButtonActive) {
			setShowLoadingAnimation(true);
		}

		soFirstRender.current = false;
	}, [searchButtonActive, soSearchResults]);

	useEffect(() => {
		soSearchResults.length > 0 && setSearchButtonActive(true);
	}, [soSearchResults]);

	useEffect(() => {}, [searchButtonActive]);

	return showLoadingAnimation ? (
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
		soSearchResults.length > 0 && (
			<div className="col-sm-12 col-xl-6 stack-search-results-container">
				<div className="row">
					<div className="col-12">
						<SearchOptionsHeader title={"Stack Overflow Results"} />
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						{soSearchResults.length > 0 ? (
							soSearchResults.map((question, index) => {
								return (
									<StackResponseContainer
										question={question}
										index={index}
										key={question.question_id}
									/>
								);
							})
						) : (
							<div>No Results Found</div>
						)}
					</div>
				</div>
			</div>
		)
	);
}
