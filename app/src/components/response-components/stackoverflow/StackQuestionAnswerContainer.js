import {useEffect, useState} from 'react';
import '../../SearchAppComponentsStyle.css';

import StackQuestionAnswerAccepted from './StackQuestionAnswerAccepted';
import StackQuestionAnswerNumber from './StackQuestionAnswerNumber';
import StackQuestionScoreNumber from './StackQuestionScoreNumber';


export default function StackQuestionAnswerData({accepted, answers, score}) {

    return (
        <div className="container stack-question-response-answer-container">
        <div className="row">
            <div className="col-12 col-sm-4">
                <StackQuestionAnswerNumber answerNumber={answers} />
            </div>
            <div className="col-12 col-sm-4">
                <StackQuestionAnswerAccepted accepted={accepted} />
            </div>
            <div className="col-12 col-sm-4">
                <StackQuestionScoreNumber score={score}/>
            </div>
        </div>
    </div>
    );
}