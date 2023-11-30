import { useEffect, useState } from "react";

const useSOAcceptedAnswerOptions = (soSearchData, setSoSearchData) => {
	const [acceptedAnswer, setAcceptedAnswer] = useState(false);

	useEffect(() => {
		if (acceptedAnswer) {
			setSoSearchData({
				...soSearchData,
				accepted: true,
			});
		} else {
			setSoSearchData({
				...soSearchData,
				accepted: false,
			});
		}
	}, [acceptedAnswer]);

	return {
		acceptedAnswer: acceptedAnswer,
		setAcceptedAnswer: setAcceptedAnswer,
	};
};

export default useSOAcceptedAnswerOptions;
