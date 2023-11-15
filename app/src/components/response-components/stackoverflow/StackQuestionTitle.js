import {useEffect, useState} from 'react';
import './StackoverflowResponseComponentsStyle.css'


export default function StackQuestionTitle({title, link}) {

    return (
        <div className="row">
            <div className="col stack-title">
                <a href={link} target='_blank'><h4>{ title }</h4></a>
            </div>
        </div>
    );
}