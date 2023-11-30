import { useEffect, useState } from "react";

import {
	fetchSoRouteData,
	getMappedRoutesFromCategories,
	getRouteCategories,
	handleRouteCategoryChange,
	handleRouteChange,
	updateSoSearchFieldStatus,
} from "../../functions/SORouteSelectFunctions";

const useRouteSelect = (
	fieldStatus,
	soFieldStatus,
	setSoFieldStatus,
	soSearchData,
	setSoSearchData,
) => {
	const [soRouteData, setSoRouteData] = useState(false);
	const [routeCategories, setRouteCategories] = useState();
	const [currentCategory, setCurrentCategory] = useState();
	const [mappedRoutesFromCategories, setMappedRoutesFromCategories] =
		useState();
	const [routes, setRoutes] = useState([]);
	const [currentRoute, setCurrentRoute] = useState();

	useEffect(() => {
		fetchSoRouteData(setSoRouteData);
	}, []);

	useEffect(() => {
		if (soRouteData) {
			setRouteCategories(getRouteCategories(soRouteData));
		}
	}, [soRouteData]);

	useEffect(() => {
		if (routeCategories) {
			setCurrentCategory(routeCategories[0]);
		}
	}, [routeCategories]);

	useEffect(() => {
		if (currentCategory) {
			setMappedRoutesFromCategories(
				getMappedRoutesFromCategories(soRouteData, routeCategories),
			);
		}
	}, [currentCategory]);

	useEffect(() => {
		if (mappedRoutesFromCategories) {
			setRoutes(mappedRoutesFromCategories[currentCategory]);
		}
	}, [mappedRoutesFromCategories]);

	useEffect(() => {
		if (routes && mappedRoutesFromCategories) {
			setCurrentRoute(mappedRoutesFromCategories[currentCategory][0]);
		}
	}, [routes, mappedRoutesFromCategories]);

	useEffect(() => {
		if (currentRoute && currentCategory) {
			setSoSearchData({
				...soSearchData,
				category: currentCategory,
				route: currentRoute,
			});
		}
	}, [currentRoute, currentCategory]);

	useEffect(() => {
		updateSoSearchFieldStatus(currentRoute, setSoFieldStatus, fieldStatus);
	}, [currentRoute]);

	return {
		soRouteData: soRouteData,
		setSoRouteData: setSoRouteData,
		routeCategories: routeCategories,
		setRouteCategories: setRouteCategories,
		currentCategory: currentCategory,
		setCurrentCategory: setCurrentCategory,
		mappedRoutesFromCategories: mappedRoutesFromCategories,
		setMappedRoutesFromCategories: setMappedRoutesFromCategories,
		routes: routes,
		setRoutes: setRoutes,
		currentRoute: currentRoute,
		setCurrentRoute: setCurrentRoute,
		fieldStatus: fieldStatus,
		soFieldStatus: soFieldStatus,
		setSoFieldStatus: setSoFieldStatus,
		soSearchData: soSearchData,
		setSoSearchData: setSoSearchData,
		handleRouteCategoryChange: handleRouteCategoryChange,
		handleRouteChange: handleRouteChange,
		updateSoSearchFieldStatus: updateSoSearchFieldStatus,
	};
};

export default useRouteSelect;
