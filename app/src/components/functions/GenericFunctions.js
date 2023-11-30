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

export const prettifyString = function (data) {
	data = data.replaceAll("_", " ");
	data = data.replaceAll("-", " ");
	return data.charAt(0).toUpperCase() + data.slice(1);
};
