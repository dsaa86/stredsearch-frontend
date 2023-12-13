// import { useEffect, useState } from "react";
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

	const clickHandler = (term) => {
		searchHistoryController.setSearchHistoryData([]);

		retrieveSearchHistoryItems(term)
			.then((response) => {
				searchHistoryController.setSearchHistoryData(response.response);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div
			className="container"
			id="search-history-container"
		>
			<div
				className="row"
				id="search-history-top-row"
			>
				<div className="col-12">
					<div style={{ paddingBottom: "20px" }}>
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
						<div className="col-12">
							<div
								style={{
									paddingTop: "5px",
									paddingBottom: "5px",
								}}
							>
								<span onClick={() => clickHandler(term)}>
									<SearchOptionsHeader
										title={term}
										headerType={4}
									/>
								</span>
							</div>
						</div>
					</div>
				);
			})}
			{searchHistoryController.searchHistoryProcessedData.length > 0 && (
				<div className="container">
					{searchHistoryController.searchHistoryProcessedData.map(
						(searchResult) => {
							return (
								<div className="row">
									<div className="col-12">
										{redditTestRegExp.test(
											searchResult.link,
										) && (
											<div
												style={{
													backgroundColor: "green",
													paddingBottom: "20px",
												}}
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
												style={{
													backgroundColor: "red",
													paddingBottom: "20px",
												}}
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
		</div>
	);
}
