import axios from "axios";
import "./SearchAppComponentsStyle.css";
import { queryStackOverflow, queryReddit } from "./functions/SearchFunctions";

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
		let stackSearchSuccessResponse = false;
		let redditSearchSuccessResponse = false;

		if (!searchButtonActive) {
			return;
		}

		if (!showReddit && !showSO) {
			alert("Please select a search option");
			return;
		}
		if (showSO) {
			setSoSearchResults([]);
			setSearchButtonActive(false);
			if (stackCancelTokenSource) {
				stackCancelTokenSource.cancel(
					"Operation canceled by the user.",
				);
			}

			stackCancelTokenSource = axios.CancelToken.source();
			stackSearchSuccessResponse = queryStackOverflow(
				stackCancelTokenSource.token,
				setSoSearchResults,
				soSearchData,
			);
		}
		if (showReddit) {
			setRedditSearchResults([]);
			setSearchButtonActive(false);
			if (redditCancelTokenSource) {
				redditCancelTokenSource.cancel(
					"Operation canceled by the user.",
				);
			}
			redditCancelTokenSource = axios.CancelToken.source();
			redditSearchSuccessResponse = queryReddit(
				redditCancelTokenSource.token,
				setRedditSearchResults,
				redditSearchData,
			);
		}

		if (stackSearchSuccessResponse || redditSearchSuccessResponse) {
			setSearchButtonActive(true);
		}
	};

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
