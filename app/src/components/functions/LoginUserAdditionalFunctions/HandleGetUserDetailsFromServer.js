import axios from "axios";

const handleGetUserDetailsFromServer = (token) => {
	const url = "http://localhost:8000/get-details/";
	const headers = {
		Authorization: `Token ${token}`,
	};

	return getUserDetailsFromServerAsync(url, headers);
};

const getUserDetailsFromServerAsync = async (url, headers) => {
	return await axios.get(url, { headers });
};

export default handleGetUserDetailsFromServer;
