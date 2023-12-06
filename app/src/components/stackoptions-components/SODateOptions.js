import useSODateOptions from "../custom-hooks/SODateOptions/UseSODateOptions";
import SODateOptionInput from "./SODateOptionInput";
import addTokenToSoSearchData from "../functions/AddTokenToSoSearchData";

export default function SODateOptions({
	soFieldStatus,
	soSearchData,
	setSoSearchData,
}) {
	const useSoDateOptions = useSODateOptions(
		soFieldStatus,
		soSearchData,
		setSoSearchData,
	);

	const handleFromDateChange = (event) => {
		useSoDateOptions.setFromDate(event.target.value);
		addTokenToSoSearchData(
			useSoDateOptions.setSoSearchData,
			useSoDateOptions.soSearchData,
		);
	};

	const handleToDateChange = (event) => {
		useSoDateOptions.setToDate(event.target.value);
		addTokenToSoSearchData(
			useSoDateOptions.setSoSearchData,
			useSoDateOptions.soSearchData,
		);
	};

	return (
		<div className="row">
			<SODateOptionInput
				identifier={"from-date"}
				onChangeHandler={handleFromDateChange}
				disabledStatus={useSoDateOptions.soFieldStatus.from_date}
				defaultValue={useSoDateOptions.defaultDateFromValue}
			/>
			<SODateOptionInput
				identifier={"to-date"}
				onChangeHandler={handleToDateChange}
				disabledStatus={useSoDateOptions.soFieldStatus.to_date}
				defaultValue={useSoDateOptions.defaultDateToValue}
			/>
		</div>
	);
}
