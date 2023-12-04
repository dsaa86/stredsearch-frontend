import "./SearchAppComponentsStyle.css";
import { searchButtonPerformSearch } from "./functions/SearchButton";

export default function SearchButton({
	showReddit,
	showSO,
	setSoSearchResults,
	setRedditSearchResults,
	soSearchData,
	redditSearchData,
	searchButtonActive,
	setSearchButtonActive,
}) {
	let stackCancelTokenSource;
	let redditCancelTokenSource;

	const searchButtonHandler = () => {
		searchButtonPerformSearch(
			showReddit,
			showSO,
			setSoSearchResults,
			setRedditSearchResults,
			soSearchData,
			redditSearchData,
			searchButtonActive,
			setSearchButtonActive,
			stackCancelTokenSource,
			redditCancelTokenSource,
		);
	};

	// TODO: Can be refactored in to a single button component for all buttons on the site
	return (
		<div className="container">
			<div className="row">
				<button
					className="col-12 btn btn-primary"
					type="button"
					onClick={searchButtonHandler}
				>
					Search
				</button>
			</div>
		</div>
	);
}
