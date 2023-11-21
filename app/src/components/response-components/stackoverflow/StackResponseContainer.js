import "./StackoverflowResponseComponentsStyle.css";

import StackQuestionMetaDataContainer from "./StackQuestionMetaDataContainer.js";
import StackQuestionTags from "./StackQuestionTags.js";
import StackQuestionTitle from "./StackQuestionTitle.js";

export default function StackResponseContainer({ question }) {
	return (
		<div className="container stack-response-container">
			<StackQuestionTitle
				title={question.title}
				link={question.link}
			/>
			<StackQuestionTags tags={question.tags} />
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
