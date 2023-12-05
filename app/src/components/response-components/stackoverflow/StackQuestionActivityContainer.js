import TitleAndData from "./StackQuestionTitleAndDataComponent";

export default function StackQuestionAnswerData({ created, lastActivity }) {
	return (
		<div className="container stack-question-response-answer-container">
			<div className="row">
				<div className="col-12 col-sm-6">
					<TitleAndData
						title={"Created:"}
						data={created}
						isDate={true}
					/>
				</div>
				<div className="col-12 col-sm-4">
					<TitleAndData
						title={"Last Activity:"}
						data={lastActivity}
						isDate={true}
					/>
				</div>
			</div>
		</div>
	);
}
