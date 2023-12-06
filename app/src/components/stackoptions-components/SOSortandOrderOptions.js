import useSOSortandOrderOptions from "../custom-hooks/SOSortandOrderOptions/UseSOSortandOrderOptions";
import SOSortandOrderOptionsInput from "./SOSortandOrderOptionsInput";
import addTokenToSoSearchData from "../functions/AddTokenToSoSearchData";

export default function SOSortandOrderOptions({
	soFieldStatus,
	soSearchData,
	setSoSearchData,
}) {
	const useSoSortandOrderOptions = useSOSortandOrderOptions(
		soFieldStatus,
		soSearchData,
		setSoSearchData,
	);

	const handleChangeSort = (event) => {
		useSoSortandOrderOptions.setSortOptions(event.target.value);

		addTokenToSoSearchData(
			useSoSortandOrderOptions.setSoSearchData,
			useSoSortandOrderOptions.soSearchData,
		);
	};

	const handleChangeOrder = (event) => {
		useSoSortandOrderOptions.setOrderOptions(event.target.value);

		addTokenToSoSearchData(
			useSoSortandOrderOptions.setSoSearchData,
			useSoSortandOrderOptions.soSearchData,
		);
	};

	return (
		<div className="row">
			<SOSortandOrderOptionsInput
				identifier={"sort-options"}
				value={useSoSortandOrderOptions.sortOptions}
				handleChange={handleChangeSort}
				disabled={useSoSortandOrderOptions.soFieldStatus.resultsSort}
				options={[
					"activity",
					"votes",
					"creation",
					"hot",
					"week",
					"month",
				]}
			/>

			<SOSortandOrderOptionsInput
				identifier={"order-options"}
				value={useSoSortandOrderOptions.orderOptions}
				handleChange={handleChangeOrder}
				disabled={useSoSortandOrderOptions.soFieldStatus.order}
				options={["desc", "asc"]}
				additionalOptions={["Descending", "Ascending"]}
			/>
		</div>
	);
}
