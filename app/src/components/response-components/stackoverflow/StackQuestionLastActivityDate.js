import {useEffect, useState} from 'react';
import './StackoverflowResponseComponentsStyle.css'


export default function StackQuestionLastActivityDate({lastActivity}) {
    const lastActivityDate = new Date(lastActivity)
    let month = lastActivityDate.getMonth() + 1
    let day = lastActivityDate.getDate()
    let year = lastActivityDate.getFullYear()

    const lastActivityDateString = `${day}/${month}/${year}`

    return (
            <div className="col stack-title stack-question-user">
                <span>Last Activity: {lastActivityDateString}</span>
            </div>
    );
}