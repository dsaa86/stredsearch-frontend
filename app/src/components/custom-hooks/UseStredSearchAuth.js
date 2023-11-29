import { useState, useEffect } from "react";

const useStredSearchAuth = () => {
	const [loginStatus, setLoginStatus] = useState(false);
	const [userDetails, setUserDetails] = useState(false);
	const [showLoginForm, setShowLoginForm] = useState(false);
	const [showRegisterForm, setShowRegisterForm] = useState(false);

	useEffect(() => {
		const keyPressHandler = (event) => {
			if (event.key == "Escape") {
				event.preventDefault();
				setShowLoginForm(false);
				setShowRegisterForm(false);
			}
		};

		document.addEventListener("keydown", keyPressHandler);

		return () => {
			document.removeEventListener("keydown", keyPressHandler);
		};
	}, []);

	return {
		loginStatus: loginStatus,
		setLoginStatus: setLoginStatus,
		userDetails: userDetails,
		setUserDetails: setUserDetails,
		showLoginForm: showLoginForm,
		setShowLoginForm: setShowLoginForm,
		showRegisterForm: showRegisterForm,
		setShowRegisterForm: setShowRegisterForm,
	};
};

export default useStredSearchAuth;
