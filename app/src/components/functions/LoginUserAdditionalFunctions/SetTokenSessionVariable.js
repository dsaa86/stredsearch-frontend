const setTokenSessionVariable = (token, setLoginStatus, setFormVisible) => {
	sessionStorage.setItem("token", token);
	setLoginStatus(true);
	setFormVisible(false);
	return true;
};

export default setTokenSessionVariable;
