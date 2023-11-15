import {useEffect, useState} from 'react';
import './StackoverflowResponseComponentsStyle.css'


export default function StackQuestionAccepted({accepted}) {

    return (
        <div className="col">
                <div className={`col ${ accepted === true ? "stack-question-accepted" : "stack-question-not-accepted" }`}>
                        <p>{ accepted === true ? "Accepted Answer" : "No Accepted Answer" }</p>
                </div>
        </div>
    );
}