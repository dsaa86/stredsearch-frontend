import {useEffect, useState} from 'react';
import '../../SearchAppComponentsStyle.css';

import StackQuestionCreatedDate from './StackQuestionCreatedDate';
import StackQuestionLastActivityDate from './StackQuestionLastActivityDate';


export default function StackQuestionAnswerData({created, lastActivity}) {

    return (
        <div className="container stack-question-response-answer-container">
        <div className="row">
            <div className="col-12 col-sm-6">
                <StackQuestionCreatedDate created={created}/>
            </div>
            <div className="col-12 col-sm-4">
                <StackQuestionLastActivityDate lastActivity={lastActivity}/>
            </div>
        </div>
    </div>
    );
}