import useRouteSelect from "../custom-hooks/SORouteSelect/UseRouteSelect";
import SORouteSelectInput from "./SORouteSelectInput";

export default function SORouteSelect({
	fieldStatus,
	soFieldStatus,
	setSoFieldStatus,
	soSearchData,
	setSoSearchData,
}) {
	const useRouteSelectHook = useRouteSelect(
		fieldStatus,
		soFieldStatus,
		setSoFieldStatus,
		soSearchData,
		setSoSearchData,
	);

	const handleRouteSelectorChange = (event) => {
		useRouteSelectHook.handleRouteChange(
			event,
			useRouteSelectHook.setCurrentRoute,
		);
	};

	const handleRouteCategoryChange = (event) => {
		useRouteSelectHook.handleRouteCategoryChange(
			event,
			useRouteSelectHook.setCurrentCategory,
			useRouteSelectHook.setRoutes,
			useRouteSelectHook.mappedRoutesFromCategories,
			useRouteSelectHook.updateSoSearchFieldStatus,
			useRouteSelectHook.setSoFieldStatus,
			useRouteSelectHook.fieldStatus,
		);
	};
	return (
		<div
			id="route-option-row"
			className="row"
		>
			{useRouteSelectHook.soRouteData &&
			useRouteSelectHook.currentCategory &&
			useRouteSelectHook.currentRoute ? (
				<>
					<SORouteSelectInput
						identifier={"search-category"}
						currentCategory={useRouteSelectHook.currentCategory}
						currentRoute={useRouteSelectHook.currentRoute}
						handleRouteCategoryChange={handleRouteCategoryChange}
						handleRouteSelectorChange={handleRouteSelectorChange}
						routeOptions={useRouteSelectHook.routeCategories}
					/>

					<SORouteSelectInput
						identifier={"search-route"}
						currentCategory={useRouteSelectHook.currentCategory}
						currentRoute={useRouteSelectHook.currentRoute}
						handleRouteCategoryChange={handleRouteCategoryChange}
						handleRouteSelectorChange={handleRouteSelectorChange}
						routeOptions={useRouteSelectHook.routes}
					/>
				</>
			) : (
				<div
					id="default-loader"
					className="col-12"
				>
					Loading...
				</div>
			)}
		</div>
	);
}
