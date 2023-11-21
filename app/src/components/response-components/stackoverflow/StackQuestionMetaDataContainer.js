import '../../SearchAppComponentsStyle.css';

import StackQuestionUserContainer from './StackQuestionUserContainer';
import StackQuestionAnswerContainer from './StackQuestionAnswerContainer';
import StackQuestionActivityContainer from './StackQuestionActivityContainer';

export default function StackQuestionMetaDataContainer({username, userId, accepted, answers, score, created, lastActivity,}) {

    return (
        <div class="row stack-response-question-metadata-holder">
            <StackQuestionUserContainer username={username} userId={userId}/>
            <hr></hr>
            <StackQuestionAnswerContainer accepted={accepted} answers={answers} score={score}/>
            <hr></hr>
            <StackQuestionActivityContainer created={created} lastActivity={lastActivity}/>
        </div>
    );
}



