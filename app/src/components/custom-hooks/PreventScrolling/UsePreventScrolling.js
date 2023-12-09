const UsePreventScrolling = () => {
	const [isOnScreen, setIsOnScreen] = useState(false);

	useEffect(() => {
		if (isOnScreen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	}, [isOnScreen]);

	return {
		isOnScreen: isOnScreen,
		setIsOnScreen: setIsOnScreen,
	};
};
