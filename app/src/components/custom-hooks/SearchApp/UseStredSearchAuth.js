import { useState, useEffect } from "react";

const useStredSearchAuth = () => {
	const [loginStatus, setLoginStatus] = useState(false);
	const [userDetails, setUserDetails] = useState(false);
	const [showLoginForm, setShowLoginForm] = useState(false);
	const [showRegisterForm, setShowRegisterForm] = useState(false);
	const [showSearchHistory, setShowSearchHistory] = useState(false);

	useEffect(() => {
		const keyPressHandler = (event) => {
			if (event.key == "Escape") {
				event.preventDefault();
				setShowLoginForm(false);
				setShowRegisterForm(false);
				setShowSearchHistory(false);
			}
		};

		document.addEventListener("keydown", keyPressHandler);

		return () => {
			document.removeEventListener("keydown", keyPressHandler);
		};
	}, []);

	useEffect(() => {
		const element = document.getElementById("search-app-container");
		if (showSearchHistory) {
			if (!element) {
				return;
			}
			element.classList.add("no-scroll");
			return;
		}

		if (!element) {
			return;
		}

		element.classList.remove("no-scroll");
		return;

		return () => {
			if (!element) {
				return;
			}
			element.classList.remove("no-scroll");
			return;
		};
	}, [showSearchHistory]);

	useEffect(() => {
		const element = document.getElementById("search-app-container");
		if (showRegisterForm) {
			if (!element) {
				return;
			}
			element.classList.add("no-scroll");
			return;
		}

		if (!element) {
			return;
		}

		element.classList.remove("no-scroll");
		return;

		return () => {
			if (!element) {
				return;
			}
			element.classList.remove("no-scroll");
			return;
		};
	}, [showRegisterForm]);

	useEffect(() => {
		const element = document.getElementById("search-app-container");
		if (showLoginForm) {
			if (!element) {
				return;
			}
			element.classList.add("no-scroll");
			return;
		}

		if (!element) {
			return;
		}

		element.classList.remove("no-scroll");
		return;

		return () => {
			if (!element) {
				return;
			}
			element.classList.remove("no-scroll");
			return;
		};
	}, [showLoginForm]);

	return {
		loginStatus: loginStatus,
		setLoginStatus: setLoginStatus,
		userDetails: userDetails,
		setUserDetails: setUserDetails,
		showLoginForm: showLoginForm,
		setShowLoginForm: setShowLoginForm,
		showRegisterForm: showRegisterForm,
		setShowRegisterForm: setShowRegisterForm,
		showSearchHistory: showSearchHistory,
		setShowSearchHistory: setShowSearchHistory,
	};
};

export default useStredSearchAuth;
