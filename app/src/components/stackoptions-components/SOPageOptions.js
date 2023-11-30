import useSOPageOptions from "../custom-hooks/SOPageOptions/UseSOPageOptions";
import SOPageOptionsInput from "./SOPageOptionsInput";
import "./StackOptionsStyle.css";

export default function SOPageOptions({
	soFieldStatus,
	soSearchData,
	setSoSearchData,
}) {
	const useSoPageOptions = useSOPageOptions(
		soFieldStatus,
		soSearchData,
		setSoSearchData,
	);

	const pageNumberChangeHandler = (e) => {
		useSoPageOptions.setPageNumber(e.target.value);
	};

	const pageSizeChangeHandler = (e) => {
		useSoPageOptions.setPageSize(e.target.value);
	};

	return (
		<div className="row">
			<SOPageOptionsInput
				identifier={"page-size"}
				min={1}
				onChangeFunction={pageSizeChangeHandler}
				disabledOption={useSoPageOptions.soFieldStatus.page_size}
				defaultValue={50}
				max={100}
			/>

			<SOPageOptionsInput
				identifier={"page-number"}
				min={1}
				onChangeFunction={pageNumberChangeHandler}
				disabledOption={useSoPageOptions.soFieldStatus.page_number}
				defaultValue={1}
			/>
		</div>
	);
}
