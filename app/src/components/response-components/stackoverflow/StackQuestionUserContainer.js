import {useEffect, useState} from 'react';
import '../../SearchAppComponentsStyle.css';
import StackQuestionUserName from './StackQuestionUserName';
import StackQuestionUserId from './StackQuestionUserId';


export default function StackQuestionUserContainer({username, userId}) {

    return (
        <div className="container stack-question-response-user-container">
            <div className="row">
                <div className="col-12 col-sm-6">
                    <StackQuestionUserName username={username} />
                </div>
                <div className="col-12 col-sm-6">
                    <StackQuestionUserId userId={userId} />
                </div>
            </div>
        </div>
    );
}