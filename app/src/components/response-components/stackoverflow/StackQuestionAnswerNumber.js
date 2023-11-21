import {useEffect, useState} from 'react';
import '../../SearchAppComponentsStyle.css';


export default function StackQuestionAnswerNumber({answerNumber}) {

    return (
        <>
            <div className="row">
                <div className='col-4'>
                    Total Answers
                </div>
                <div className="col-8">
                    {answerNumber}
                </div>
            </div>
        </>
        
    );
}