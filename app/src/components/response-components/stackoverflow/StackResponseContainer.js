import {useEffect, useState} from 'react';

import './StackoverflowResponseComponentsStyle.css'

import StackQuestionTitle from './StackQuestionTitle.js';
import StackQuestionTags from './StackQuestionTags.js';
import StackQuestionUser from './StackQuestionUser.js';
import StackQuestionAccepted from './StackQuestionAccepted.js';
import StackQuestionAnswerCount from './StackQuestionAnswerCount.js';
import StackQuestionCreatedDate from './StackQuestionCreatedDate.js';
import StackQuestionLastActivityDate from './StackQuestionLastActivityDate.js';
import StackQuestionScoreNumber from './StackQuestionScoreNumber.js';

export default function StackResponseContainer({question}) {

    return (
        <div className="container stack-response-container">
            <StackQuestionTitle title={question.title} link={question.link}/>
            <StackQuestionTags tags={question.tags}/>
            <div class="row stack-question-data-holder">
                <StackQuestionUser username={question.display_name} userId={question.user_id}/>
                <StackQuestionAccepted accepted={question.is_answered}/>
                <StackQuestionAnswerCount answerCount={question.answer_count}/>
                <StackQuestionCreatedDate created={question.creation_date}/>
                <StackQuestionLastActivityDate lastActivity={question.last_activity_date}/>
                <StackQuestionScoreNumber score={question.score}/>
            </div>
        </div>
    );
}