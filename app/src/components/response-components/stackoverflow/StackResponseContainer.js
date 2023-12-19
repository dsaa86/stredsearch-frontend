import ResponseTitle from "../ResponseTitle.js";
import StackQuestionMetaDataContainer from "./StackQuestionMetaDataContainer.js";
import StackQuestionTags from "./StackQuestionTags.js";
import StackQuestionAnswerAccepted from "./StackQuestionAnswerAccepted.js";

export default function StackResponseContainer({ question }) {
	return (
		<div className="container stack-response-container">
			<ResponseTitle
				engine={"stack"}
				title={question.title}
				link={question.link}
			/>
			<StackQuestionTags tags={question.tags} />
			<StackQuestionAnswerAccepted accepted={question.is_answered} />
			<StackQuestionMetaDataContainer
				username={question.display_name}
				userId={question.user_id}
				accepted={question.is_answered}
				answers={question.answer_count}
				score={question.score}
				created={question.creation_date}
				lastActivity={question.last_activity_date}
			/>
		</div>
	);
}
