// import { useEffect, useState } from "react";
import { prettifyString } from "../functions/GenericFunctions";
import SearchOptionsHeader from "../generic-components/search-options-header";
import axios from "axios";

export default function SearchHistory({ searchHistoryController }) {
	const redditTestRegExp = /reddit.com/;
	const stackTestRegExp = /stackoverflow.com/;

	let searchTerms = [];
	searchHistoryController.searchHistory.map((term) => {
		if (term.search_term === null || term.search_term === undefined) {
			return;
		}
		// The objects returned from Django are a bit funky. This decodes them appropriately, but server-side refactoring is necessary in order to optimise this code.
		const termValues = Object.entries(term);
		termValues.forEach(([key, value]) => {
			if (
				value === null ||
				value === undefined ||
				value.search_term === " " ||
				value.search_term === "" ||
				(key !== "search_term" && typeof value !== "object")
			) {
				return;
			}
			searchTerms.push(value.search_term);
		});
	});

	searchTerms = [...new Set(searchTerms)];

	const retrieveSearchHistoryItems = async (term) => {
		const loginToken = sessionStorage.getItem("token");
		const url = `http://localhost:8000/searchhistory/retrieve-search-results/${loginToken}/${term}/`;

		const response = await axios.get(url);

		if (response.status === 200) {
			return { success: true, response: response.data };
		}
		return { success: false, response: response.data };
	};

	const searchTermClickHandler = (term) => {
		searchHistoryController.setSearchHistoryData([]);

		retrieveSearchHistoryItems(term)
			.then((response) => {
				searchHistoryController.setSearchHistoryData(response.response);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const searchResultClickHandler = (link) => {
		window.open(link, "_blank");
	};

	return (
		<>
			<div
				className="container"
				style={{ width: "100%" }}
			>
				<div
					className="row"
					id="search-history-top-row"
				>
					<div className="col-12">
						<div style={{ marginBottom: "20px" }}>
							<SearchOptionsHeader
								title={"Search History"}
								headerType={1}
							/>
						</div>
					</div>
				</div>
				{searchTerms.map((term) => {
					return (
						<div className="row">
							<div className="col-md-4 col-6">
								<div className="search-history-term">
									<span
										onClick={() =>
											searchTermClickHandler(term)
										}
									>
										<SearchOptionsHeader
											title={prettifyString(term, true)}
											headerType={4}
										/>
									</span>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			{searchHistoryController.searchHistoryProcessedData.length > 0 && (
				<div
					className="container"
					id="search-history-results-container"
				>
					{searchHistoryController.searchHistoryProcessedData.map(
						(searchResult) => {
							return (
								<div
									className="row"
									style={{ paddingBottom: "20px;" }}
								>
									<div className="col-12">
										{redditTestRegExp.test(
											searchResult.link,
										) && (
											<div
												className="search-history-reddit-result"
												onClick={() =>
													searchResultClickHandler(
														searchResult.link,
													)
												}
											>
												<SearchOptionsHeader
													title={searchResult.title}
													headerType={6}
												/>
											</div>
										)}
										{stackTestRegExp.test(
											searchResult.link,
										) && (
											<div
												className="search-history-stack-overflow-result"
												onClick={() =>
													searchResultClickHandler(
														searchResult.link,
													)
												}
											>
												<SearchOptionsHeader
													title={searchResult.title}
													headerType={6}
												/>
											</div>
										)}
									</div>
								</div>
							);
						},
					)}
				</div>
			)}
		</>
	);
}
