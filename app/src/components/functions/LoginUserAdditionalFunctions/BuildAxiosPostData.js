const buildAxiosPostData = (data) => {
	let postData = {};

	data.forEach((datapoint) => {
		postData[datapoint[0]] = datapoint[1];
	});

	return postData;
};

export default buildAxiosPostData;
