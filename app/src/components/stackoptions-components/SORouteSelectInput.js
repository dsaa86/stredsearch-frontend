// TODO: It would be nice to amalgamate this component with the SOSortandOrderOptions component as they both use select inputs.
import {
	generateFormattedIdentifier,
	prettifyString,
} from "../functions/GenericFunctions";

export default function SORouteSelectInput({
	identifier,
	currentCategory,
	currentRoute,
	handleRouteCategoryChange,
	handleRouteSelectorChange,
	routeOptions,
}) {
	const identifierFormatted = generateFormattedIdentifier(identifier);

	return (
		<div
			id={`${identifier}-label-and-select`}
			className="col-sm-6 col-12"
		>
			<div className="row">
				<div
					id={`${identifier}-label`}
					className="col-sm-6 col-12"
				>
					<label
						id={`${identifier}-label`}
						htmlFor={identifier}
						className=""
					>
						{identifierFormatted}
					</label>
				</div>
				<div
					id={`${identifier}-select`}
					className="col-sm-6 col-12"
				>
					<select
						id={identifier}
						className="col"
						value={
							identifier === "search-category"
								? currentCategory
								: currentRoute
						}
						onChange={
							identifier === "search-category"
								? handleRouteCategoryChange
								: handleRouteSelectorChange
						}
					>
						{routeOptions.map((route, index) => (
							<option
								key={index}
								value={route}
							>
								{prettifyString(route)}
							</option>
						))}
					</select>
				</div>
			</div>
		</div>
	);
}
