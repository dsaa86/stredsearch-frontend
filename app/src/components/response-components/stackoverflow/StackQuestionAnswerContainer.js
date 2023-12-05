import StackQuestionAnswerAccepted from "./StackQuestionAnswerAccepted";
import TitleAndData from "./StackQuestionTitleAndDataComponent";

export default function StackQuestionAnswerData({ accepted, answers, score }) {
	return (
		<div className="container stack-question-response-answer-container">
			<div className="row">
				<div className="col-12 col-sm-4">
					<TitleAndData
						title={"Total Answers"}
						data={answers}
					/>
				</div>
				<div className="col-12 col-sm-4">
					<StackQuestionAnswerAccepted accepted={accepted} />
				</div>
				<div className="col-12 col-sm-4">
					<TitleAndData
						title={"Score"}
						data={score}
					/>
				</div>
			</div>
		</div>
	);
}
