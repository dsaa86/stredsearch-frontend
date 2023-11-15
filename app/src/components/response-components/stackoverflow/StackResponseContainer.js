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


// function StackQuestionTags({question}){

//   const tags = question.tagList.map(tag =>
//     <div className='question-tag-element' key={tag.id}>
//       {tag.name}
//     </div>
//     );

//   return(
//     <div className="stack-question-tags">
//       {tags}
//     </div>
//   );
// }


// function StackQuestionUser({question}){
//   return(
//     <div className="stack-question-user">
//       <span>{question.username}</span>
//     </div>
//   );
// }

// function StackQuestionAccepted({question}){
//   return(
//     <div className="stack-question-accepted">
//       <span>{question.accepted}</span>
//     </div>
//   );
// }

// function StackQuestionAnswerCount({question}){
//   return(
//     <div className="stack-question-answer-count">
//       <span>{question.answerCount}</span>
//     </div>
//   );
// }

// function StackQuestionCreatedDate({question}){
//   return(
//     <div className="stack-question-created-date">
//       <span>{question.createdDate}</span>
//     </div>
//   );

// }

// function StackQuestionLastActivityDate({question}){
//   return(
//     <div className="stack-question-last-activity-date">
//       <span>{question.lastActivityDate}</span>
//     </div>
//   );
// }

// function StackQuestionVoteNumber({question}){
//   return(
//     <div className="stack-question-vote-number">
//       <span>{question.voteNumber}</span>
//     </div>
//   );
// }