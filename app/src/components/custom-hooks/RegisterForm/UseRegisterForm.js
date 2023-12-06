import { useState, useEffect } from "react";

const UseRegisterForm = (
	setLoginStatus,
	setShowRegisterForm,
	userDetails,
	setUserDetails,
) => {
	const [errorsRendered, setErrorsRendered] = useState(0);

	const [formState, setFormState] = useState({
		register_username: "",
		register_email: "",
		register_password: "",
		register_password_confirm: "",
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
		setShowRegisterForm: setShowRegisterForm,
		userDetails: userDetails,
		setUserDetails: setUserDetails,
	};
};

export default UseRegisterForm;
