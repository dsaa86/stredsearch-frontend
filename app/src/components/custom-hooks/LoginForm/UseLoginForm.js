import { useState, useEffect } from "react";

const UseLoginForm = (
	setLoginStatus,
	setShowLoginForm,
	userDetails,
	setUserDetails,
) => {
	const [errorsRendered, setErrorsRendered] = useState(0);

	const [formState, setFormState] = useState({
		login_username: "",
		login_password: "",
	});

	const [formInvalid, setFormInvalid] = useState({
		error: {
			blank: "",
		},
		valid: true,
		attempt: 0,
	});

	useEffect(() => {}, [formInvalid]);

	return {
		errorsRendered: errorsRendered,
		setErrorsRendered: setErrorsRendered,
		formState: formState,
		setFormState: setFormState,
		formInvalid: formInvalid,
		setFormInvalid: setFormInvalid,
		setLoginStatus: setLoginStatus,
		setShowLoginForm: setShowLoginForm,
		userDetails: userDetails,
		setUserDetails: setUserDetails,
	};
};

export default UseLoginForm;
