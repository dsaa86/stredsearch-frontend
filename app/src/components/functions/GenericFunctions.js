export const generateFormattedIdentifier = (identifier) => {
	const identifierSplit = identifier.split("-");

	let identifierFormatted = "";

	identifierSplit.forEach((word) => {
		identifierFormatted += prettifyString(word) + " ";
	});

	if (identifierSplit.length > 1) {
		identifierFormatted = identifierFormatted.trim();
	}

	return identifierFormatted;
};

export const prettifyString = function (data, spaceCommas = false) {
	data = data.replaceAll("_", " ");
	data = data.replaceAll("-", " ");
	data = data.charAt(0).toUpperCase() + data.slice(1);
	if (spaceCommas) {
		data = data.replaceAll(",", ", ");
	}

	return data;
};

export const handleClickOutsideModal = (event, setShowFalseFunction) => {
	setShowFalseFunction(false);
	// if (event.target.id == "search-history-div") {
	// 	setShowSearchHistory(false);
	// 	return;
	// }

	// if (event.target.id == "register-form-div") {
	// 	setShowRegisterForm(false);
	// 	return;
	// }

	// if (event.target.id == "login-form-div") {
	// 	setShowLoginForm(false);
	// 	return;
	// }
};
