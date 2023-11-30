import { useEffect, useState } from "react";

const useSOMigratedQuestionsOptions = (soSearchData, setSoSearchData) => {
	const [migratedQuestion, setMigratedQuestion] = useState(false);

	useEffect(() => {
		if (migratedQuestion) {
			setSoSearchData({
				...soSearchData,
				migrated: true,
			});
		} else {
			setSoSearchData({
				...soSearchData,
				migrated: false,
			});
		}
	}, [migratedQuestion]);

	return {
		migratedQuestion: migratedQuestion,
		setMigratedQuestion: setMigratedQuestion,
	};
};

export default useSOMigratedQuestionsOptions;
