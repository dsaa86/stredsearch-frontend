import {useEffect, useState} from 'react';
import './StackoverflowResponseComponentsStyle.css'


export default function StackQuestionUser({score}) {

    return (
            <div className="col-1 stack-title stack-question-user">
                <span>Score: {score}</span>
            </div>
    );
}