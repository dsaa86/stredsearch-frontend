import { useEffect, useState } from "react";

const useSOSortandOrderOptions = (
	soFieldStatus,
	soSearchData,
	setSoSearchData,
) => {
	const [sortOptions, setSortOptions] = useState([]);
	const [orderOptions, setOrderOptions] = useState([]);

	useEffect(() => {
		setSoSearchData({
			...soSearchData,
			resultsSort: sortOptions,
			order: orderOptions,
		});
	}, [sortOptions, orderOptions]);

	return {
		sortOptions: sortOptions,
		setSortOptions: setSortOptions,
		orderOptions: orderOptions,
		setOrderOptions: setOrderOptions,
		soFieldStatus: soFieldStatus,
		soSearchData: soSearchData,
		setSoSearchData: setSoSearchData,
	};
};

export default useSOSortandOrderOptions;
