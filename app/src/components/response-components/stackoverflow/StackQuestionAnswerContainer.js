import StackQuestionAnswerAccepted from "./StackQuestionAnswerAccepted";
import TitleAndData from "./StackQuestionTitleAndData";

export default function StackQuestionAnswerData({ answers, score }) {
	return (
		<div className="container stack-question-response-answer-container">
			<div className="row">
				<div className="col-12 col-sm-6">
					<TitleAndData
						title={"Total Answers"}
						data={answers}
						isTotalAnswers={true}
					/>
				</div>
				<div className="col-12 col-sm-6">
					<TitleAndData
						title={"Score"}
						data={score}
						isScore={true}
					/>
				</div>
			</div>
		</div>
	);
}
