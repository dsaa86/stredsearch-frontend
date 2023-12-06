const addTokenToSoSearchData = (setSoSearchData, soSearchData) => {
	if (sessionStorage.getItem("token") !== null) {
		setSoSearchData({
			...soSearchData,
			token: sessionStorage.getItem("token"),
		});
	} else {
		setSoSearchData({
			...soSearchData,
			token: "",
		});
	}
};

export default addTokenToSoSearchData;
