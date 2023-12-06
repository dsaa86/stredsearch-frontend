import axios from "axios";
import buildAxiosPostData from "./BuildAxiosPostData";

const handleUserLoginToStredSearch = (username, password, cancelToken) => {
	const url = "http://localhost:8000/api-token-auth/";

	const postData = buildAxiosPostData([
		["username", username],
		["password", password],
	]);

	const headerData = buildAxiosPostData([
		["Content-Type", "multipart/form-data"],
	]);

	return loginUserOnStredSearchAsync(url, postData, headerData, cancelToken);
};

const loginUserOnStredSearchAsync = async (url, data, headers, cancelToken) => {
	return await axios.post(url, data, {
		headers,
		cancelToken: cancelToken.token,
	});
};

export default handleUserLoginToStredSearch;
