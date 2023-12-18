import {
	updateSoSearchFieldStatus,
	fetchSoRouteData,
	getRouteCategories,
	getMappedRoutesFromCategories,
	handleRouteCategoryChange,
	handleRouteChange,
} from "./SORouteSelectFunctions";
import Axios from "axios";
jest.mock("axios");

describe("SORouteSelectFunctions", () => {
	describe("updateSoSearchFieldStatus", () => {
		it("should update the search field status based on the current route", () => {
			const setSoFieldStatus = jest.fn();
			const fieldStatus = {
				question_by_tag: "tag",
				related_questions: "related",
				search: "search",
				advanced_search: "advanced",
			};

			updateSoSearchFieldStatus(
				"question_by_tag",
				setSoFieldStatus,
				fieldStatus,
			);
			expect(setSoFieldStatus).toHaveBeenCalledWith("tag");
		});
	});

	describe("fetchSoRouteData", () => {
		it("should fetch route data", async () => {
			const data = { data: "test" };
			Axios.mockResolvedValue(data);
			const setSoRouteData = jest.fn();

			await fetchSoRouteData(setSoRouteData);
			expect(setSoRouteData).toHaveBeenCalledWith("test");
		});
	});

	describe("getRouteCategories", () => {
		it("should get unique route categories", () => {
			const soRouteData = [
				{ route_category: "cat1" },
				{ route_category: "cat2" },
				{ route_category: "cat1" },
			];
			const result = getRouteCategories(soRouteData);
			expect(result).toEqual(["cat1", "cat2"]);
		});
	});

	describe("getMappedRoutesFromCategories", () => {
		it("should map routes to categories", () => {
			const soRouteData = [
				{ route_category: "cat1", route_query: "route1" },
				{ route_category: "cat2", route_query: "route2" },
				{ route_category: "cat1", route_query: "route3" },
			];
			const routeCategories = ["cat1", "cat2"];
			const result = getMappedRoutesFromCategories(
				soRouteData,
				routeCategories,
			);
			expect(result).toEqual({
				cat1: ["route1", "route3"],
				cat2: ["route2"],
			});
		});
	});

	describe("handleRouteCategoryChange", () => {
		it("should handle route category change", () => {
			const setCurrentCategory = jest.fn();
			const setRoutes = jest.fn();
			const updateSoSearchFieldStatus = jest.fn();
			const setSoFieldStatus = jest.fn();
			const fieldStatus = "test";
			const mappedRoutesFromCategories = {
				cat1: ["route1", "route3"],
				cat2: ["route2"],
			};
			const event = { target: { value: "cat1" } };

			handleRouteCategoryChange(
				event,
				setCurrentCategory,
				setRoutes,
				mappedRoutesFromCategories,
				updateSoSearchFieldStatus,
				setSoFieldStatus,
				fieldStatus,
			);
			expect(setCurrentCategory).toHaveBeenCalledWith("cat1");
			expect(setRoutes).toHaveBeenCalledWith(["route1", "route3"]);
			expect(updateSoSearchFieldStatus).toHaveBeenCalledWith(
				event,
				setSoFieldStatus,
				fieldStatus,
			);
		});
	});

	describe("handleRouteChange", () => {
		it("should handle route change", () => {
			const setCurrentRoute = jest.fn();
			const event = { target: { value: "route1" } };

			handleRouteChange(event, setCurrentRoute);
			expect(setCurrentRoute).toHaveBeenCalledWith("route1");
		});
	});
});
