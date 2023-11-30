import { useState, useEffect, useRef } from "react";

const useLoadingAnimation = (
	searchResults,
	setSearchButtonActive,
	searchButtonActive,
) => {
	const [showLoadingAnimation, setShowLoadingAnimation] = useState(false);
	const firstRender = useRef(true);

	useEffect(() => {
		if (firstRender) {
			setShowLoadingAnimation(false);
		}
	}, []);

	useEffect(() => {
		if (searchResults.length > 0 && searchButtonActive) {
			setShowLoadingAnimation(false);
		} else if (firstRender.current) {
			setShowLoadingAnimation(false);
		} else if (!searchButtonActive) {
			setShowLoadingAnimation(true);
		}

		firstRender.current = false;
	}, [searchButtonActive, searchResults]);

	useEffect(() => {
		searchResults.length > 0 && setSearchButtonActive(true);
	}, [searchResults]);

	useEffect(() => {}, [searchButtonActive]);

	return {
		showLoadingAnimation: showLoadingAnimation,
		setShowLoadingAnimation: setShowLoadingAnimation,
		searchResults: searchResults,
		setSearchButtonActive: setSearchButtonActive,
		searchButtonActive: searchButtonActive,
	};
};

export default useLoadingAnimation;
