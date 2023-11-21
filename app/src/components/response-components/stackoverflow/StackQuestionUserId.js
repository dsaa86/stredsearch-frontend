import {useEffect, useState} from 'react';
import '../../SearchAppComponentsStyle.css';


export default function StackQuestionUser({userId}) {

    return (
        <>
        <div className="row">
            <div className='col-4'>
                User ID
            </div>
            <div className="col-8">
                {userId}
            </div>
        </div>
    </>
);
}