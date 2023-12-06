import axios from "axios";

const registerUserToStredSearch = (
	url,
	registerCancelToken,
	formState,
	headers,
) => {
	const postData = buildAxiosPostData([
		["username", formState.register_username],
		["email", formState.register_email],
		["password", formState.register_password],
		["password2", formState.register_password],
	]);

	const headerData = buildAxiosPostData(headers);

	return registerUserOnStredSearchAsync(url, postData, headerData);
};

const registerUserOnStredSearchAsync = async (url, data, headers) => {
	return await axios.post(url, data, headers);
};

const buildAxiosPostData = (data) => {
	let postData = {};

	data.forEach((datapoint) => {
		postData[datapoint[0]] = datapoint[1];
	});

	return postData;
};

export default registerUserToStredSearch;
