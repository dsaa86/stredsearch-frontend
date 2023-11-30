import { useEffect, useState } from "react";

const useSOPageOptions = (soFieldStatus, soSearchData, setSoSearchData) => {
	const [pageNumber, setPageNumber] = useState(1);
	const [pageSize, setPageSize] = useState(10);

	useEffect(() => {
		if (pageNumber < 1) {
			setPageNumber(1);
		}
		if (pageSize < 1) {
			setPageSize(1);
		}
		if (pageSize > 100) {
			setPageSize(100);
		}
		setSoSearchData({
			...soSearchData,
			page: pageNumber,
			pagesize: pageSize,
		});
	}, [pageNumber, pageSize]);

	return {
		pageNumber: pageNumber,
		setPageNumber: setPageNumber,
		pageSize: pageSize,
		setPageSize: setPageSize,
		soFieldStatus: soFieldStatus,
		soSearchData: soSearchData,
		setSoSearchData: setSoSearchData,
	};
};

export default useSOPageOptions;
