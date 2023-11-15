import {useEffect, useState} from 'react';
import './StackoverflowResponseComponentsStyle.css'


export default function StackQuestionAnswerCount({answerCount}) {

    return (
            <div className="col">
                <p>Answers: {answerCount}</p>
            </div>
        
    );
}