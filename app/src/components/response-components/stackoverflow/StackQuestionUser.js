import {useEffect, useState} from 'react';
import './StackoverflowResponseComponentsStyle.css'


export default function StackQuestionUser({username, userId}) {

    return (
        <div className="col">
            <div className="row">
                <div className="col stack-title stack-question-user">
                    <p>User: {username}</p>
                </div>
                <div className="col stack-title stack-question-user">
                    <p>ID: {userId}</p>
                </div>
            </div>
        </div>
    );
}