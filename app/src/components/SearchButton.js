import axios from "axios";
import "./SearchAppComponentsStyle.css";
import {
	queryStackOverflow,
	queryReddit,
	validateStackOverflowSearchParams,
	validateRedditSearchParams,
} from "./functions/SearchFunctions";

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

			const stackSearchParamsAreValid =
				validateStackOverflowSearchParams(soSearchData);

			if (stackSearchParamsAreValid.response) {
				stackSearchSuccessResponse = queryStackOverflow(
					stackCancelTokenSource.token,
					setSoSearchResults,
					soSearchData,
				);
			} else {
				// TODO: A custom modal would be better here
				stackSearchSuccessResponse = false;
				let alertMessage =
					"The following fields for Stack Overflow may be missing or incorrectly formatted:";
				stackSearchParamsAreValid.invalidFields.forEach((field) => {
					alertMessage += `\n${field}`;
				});

				alertMessage +=
					"\nThese omissions are a logical OR; not all fields may be required for your specific search.\nPlease correct these fields and try again.";
				alert(alertMessage);
				setSearchButtonActive(true);
				return;
			}
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

			const redditSearchParamsAreValid =
				validateRedditSearchParams(redditSearchData);

			if (redditSearchParamsAreValid.response) {
				redditSearchSuccessResponse = queryReddit(
					redditCancelTokenSource.token,
					setRedditSearchResults,
					redditSearchData,
				);
			} else {
				// TODO: A custom modal would be better here
				redditSearchSuccessResponse = false;
				let alertMessage =
					"The following fields for Reddit may be missing or incorrectly formatted:";
				redditSearchParamsAreValid.invalidFields.forEach((field) => {
					alertMessage += `\n${field}`;
				});

				alertMessage +=
					"\nThese omissions are a logical OR; not all fields may be required for your specific search.\nPlease correct these fields and try again.";
				alert(alertMessage);
				setSearchButtonActive(true);
				return;
			}
		}
		// TODO: Need to incorporate error handling if search is cancelled or API lookup fails
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
