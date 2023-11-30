import { useEffect, useState } from "react";

const useSOHasWikiOptions = (soSearchData, setSoSearchData) => {
	const [wiki, setWiki] = useState(false);

	useEffect(() => {
		if (wiki) {
			setSoSearchData({
				...soSearchData,
				wiki: true,
			});
		} else {
			setSoSearchData({
				...soSearchData,
				wiki: false,
			});
		}
	}, [wiki]);

	return {
		wiki: wiki,
		setWiki: setWiki,
	};
};

export default useSOHasWikiOptions;
