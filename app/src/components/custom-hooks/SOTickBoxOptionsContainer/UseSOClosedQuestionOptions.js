import { useEffect, useState } from "react";

const useSOClosedQuestionOptions = (soSearchData, setSoSearchData) => {
	const [closedQuestion, setClosedQuestion] = useState(false);

	useEffect(() => {
		if (closedQuestion) {
			setSoSearchData({
				...soSearchData,
				closed: true,
			});
		} else {
			setSoSearchData({
				...soSearchData,
				closed: false,
			});
		}
	}, [closedQuestion]);
	return {
		closedQuestion: closedQuestion,
		setClosedQuestion: setClosedQuestion,
	};
};

export default useSOClosedQuestionOptions;
