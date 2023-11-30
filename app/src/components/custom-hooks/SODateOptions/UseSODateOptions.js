import { useEffect, useState } from "react";

const useSODateOptions = (soFieldStatus, soSearchData, setSoSearchData) => {
	const [fromDate, setFromDate] = useState("");
	const [toDate, setToDate] = useState("");

	const dateFromValue = new Date();
	const dateToValue = new Date();
	dateToValue.setDate(dateToValue.getDate() + 1);
	dateFromValue.setFullYear(2000, 0, 2);
	const defaultDateFromValue = dateFromValue.toISOString().slice(0, 10);
	const defaultDateToValue = dateToValue.toISOString().slice(0, 10);

	useEffect(() => {
		const fromDateObject = new Date(fromDate);
		let fromDateString = String(fromDateObject.getTime());
		const toDateObject = new Date(toDate);
		let toDateString = String(toDateObject.getTime());

		if (toDateString == "NaN") {
			toDateString = String(new Date().getTime());
		}
		if (fromDateString == "NaN") {
			const dateObj = new Date();
			dateObj.setFullYear(2000, 0, 2);
			fromDateString = String(dateObj.getTime());
		}

		setSoSearchData({
			...soSearchData,
			from_date: fromDateString,
			to_date: toDateString,
		});
	}, [fromDate, toDate]);

	return {
		fromDate: fromDate,
		setFromDate: setFromDate,
		toDate: toDate,
		setToDate: setToDate,
		soFieldStatus: soFieldStatus,
		soSearchData: soSearchData,
		setSoSearchData: setSoSearchData,
	};
};

export default useSODateOptions;
