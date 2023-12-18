import { render, fireEvent, screen } from "@testing-library/react";
import React from "react";
import LocalSearch from "./LocalSearch";

jest.mock("./custom-hooks/LocalSearch/UseLocalSearchData", () => ({
	__esModule: true,
	default: () => ({
		searchBoxValue: "",
		setSearchBoxValue: jest.fn(),
		soLocalSearchData: [],
		setSoLocalSearchData: jest.fn(),
		redditLocalSearchData: [],
		setRedditLocalSearchData: jest.fn(),
		setSearchButtonActive: jest.fn(),
		searchButtonActive: false,
	}),
}));

jest.mock("./functions/LocalSearchFunctions", () => ({
	performLocalSearch: jest.fn(),
}));

jest.mock("react-lottie", () => {
	return function DummyLottie() {
		return <div />;
	};
});

test("LocalSearch renders child components", () => {
	render(<LocalSearch />);

	expect(screen.getByText("Search Cached Data")).toBeInTheDocument();
	expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
});

test("LocalSearch handles button clicks", () => {
	const { performLocalSearch } = require("./functions/LocalSearchFunctions");

	render(<LocalSearch />);

	fireEvent.click(screen.getByText("Search"));

	expect(performLocalSearch).toHaveBeenCalled();
});
