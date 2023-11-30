import { extractUniqueValuesFromArray } from "../../AppHelperFunctions";
import Axios from "axios";

export const updateSoSearchFieldStatus = (
	currentRoute,
	setSoFieldStatus,
	fieldStatus,
) => {
	if (currentRoute === "question_by_tag") {
		setSoFieldStatus(fieldStatus.question_by_tag);
	} else if (currentRoute === "related_questions") {
		setSoFieldStatus(fieldStatus.related_questions);
	} else if (currentRoute === "search") {
		setSoFieldStatus(fieldStatus.search);
	} else if (currentRoute === "advanced-search") {
		setSoFieldStatus(fieldStatus.advanced_search);
	}
};

export const fetchSoRouteData = async (setSoRouteData) => {
	const response = await Axios("http://localhost:8000/stack/get/routes/");
	setSoRouteData(response.data);
};

export const getRouteCategories = (soRouteData) => {
	if (!soRouteData) {
		return [];
	}
	const allCategories = soRouteData.map((route) => route.route_category);
	return extractUniqueValuesFromArray(allCategories);
};

export const getMappedRoutesFromCategories = (soRouteData, routeCategories) => {
	// This function will extract all the routes from the routeCategories array
	// The final object will have this structure:

	// obj = {
	//     cat1 : [route1, route2, route3],
	//     cat2 : [route1, route2, route3],
	//     ...etc
	// }
	if (!soRouteData && !routeCategories) {
		return [];
	}
	let extractedRoutes = {};
	routeCategories.forEach((category) => {
		extractedRoutes[category] = [];
	});

	soRouteData.forEach((route) => {
		extractedRoutes[route.route_category].push(route.route_query);
	});
	return extractedRoutes;
};

export const handleRouteCategoryChange = (
	event,
	setCurrentCategory,
	setRoutes,
	mappedRoutesFromCategories,
	updateSoSearchFieldStatus,
	setSoFieldStatus,
	fieldStatus,
) => {
	setCurrentCategory(event.target.value);
	setRoutes(mappedRoutesFromCategories[event.target.value]);
	updateSoSearchFieldStatus(event, setSoFieldStatus, fieldStatus);
};

export const handleRouteChange = (event, setCurrentRoute) => {
	setCurrentRoute(event.target.value);
	// updateSoSearchFieldStatus(event, setSoFieldStatus, fieldStatus)
};
