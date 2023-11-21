import {useEffect, useState} from 'react';
import '../../SearchAppComponentsStyle.css';


export default function StackQuestionUser({score}) {

    return (

        <>
            <div className="row">
                <div className='col-4'>
                    Score
                </div>
                <div className="col-8">
                    {score}
                </div>
            </div>
        </>
    );
}