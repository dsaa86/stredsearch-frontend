import useSOAcceptedAnswerOptions from "../custom-hooks/SOTickBoxOptionsContainer/UseSOAcceptedAnswerOptions";
import useSOClosedQuestionOptions from "../custom-hooks/SOTickBoxOptionsContainer/UseSOClosedQuestionOptions";
import useSOMigratedQuestionsOptions from "../custom-hooks/SOTickBoxOptionsContainer/UseSOMigratedQuestionsOptions";
import useSOHasWikiOptions from "../custom-hooks/SOTickBoxOptionsContainer/UseSOHasWikiOptions";
import SOTickBoxOptionsInput from "./SOTickBoxOptionsInput";
import addTokenToSoSearchData from "../functions/AddTokenToSoSearchData";

export default function SOTickBoxOptionsContainer({
	soFieldStatus,
	soSearchData,
	setSoSearchData,
}) {
	const useSoAcceptedAnswerOptions = useSOAcceptedAnswerOptions(
		soSearchData,
		setSoSearchData,
	);

	const useSoMigratedQuestionsOptions = useSOMigratedQuestionsOptions(
		soSearchData,
		setSoSearchData,
	);

	const useSoHasWikiOptions = useSOHasWikiOptions(
		soSearchData,
		setSoSearchData,
	);

	const useSoClosedQuestionOptions = useSOClosedQuestionOptions(
		soSearchData,
		setSoSearchData,
	);

	const handleChangeAcceptedAnswer = (e) => {
		useSoAcceptedAnswerOptions.setAcceptedAnswer(e.target.checked);
	};

	const handleChangeMigratedQuestion = (e) => {
		useSoMigratedQuestionsOptions.setMigratedQuestion(e.target.checked);
	};

	const handleChangeWikiOption = (e) => {
		useSoHasWikiOptions.setWiki(e.target.checked);
	};

	const handleChangeClosedQuestion = (e) => {
		useSoClosedQuestionOptions.setClosedQuestion(e.target.checked);
	};

	return (
		<div className="row">
			<div className="col-sm-3 col-0"></div>
			<div className="col-sm-9">
				<div className="row">
					<SOTickBoxOptionsInput
						identifier={"so-accepted"}
						formattedIdentifier={"Accepted"}
						disabledState={soFieldStatus.accepted}
						onChangeHandler={handleChangeAcceptedAnswer}
					/>
					<SOTickBoxOptionsInput
						identifier={"so-closed"}
						formattedIdentifier={"Closed"}
						disabledState={soFieldStatus.closed}
						onChangeHandler={handleChangeClosedQuestion}
					/>
					<SOTickBoxOptionsInput
						identifier={"so-migrated"}
						formattedIdentifier={"Migrated"}
						disabledState={soFieldStatus.migrated}
						onChangeHandler={handleChangeMigratedQuestion}
					/>
					<SOTickBoxOptionsInput
						identifier={"so-wiki"}
						formattedIdentifier={"Wiki"}
						disabledState={soFieldStatus.wiki}
						onChangeHandler={handleChangeWikiOption}
					/>
				</div>
			</div>
		</div>
	);
}
