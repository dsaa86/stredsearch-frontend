import {useEffect, useState} from 'react';
import './StackoverflowResponseComponentsStyle.css'


export default function StackQuestionCreatedDate({created}) {
    const createdDate = new Date(created)
    let month = createdDate.getMonth() + 1
    let day = createdDate.getDate()
    let year = createdDate.getFullYear()

    const createdDateString = `${day}/${month}/${year}`
    return (
            <div className="col stack-title stack-question-user">
                <span>Created: {createdDateString}</span>
            </div>
    );
}