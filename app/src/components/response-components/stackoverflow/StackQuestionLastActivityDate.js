import {useEffect, useState} from 'react';
import '../../SearchAppComponentsStyle.css';


export default function StackQuestionLastActivityDate({lastActivity}) {
    const lastActivityDate = new Date(lastActivity)
    let month = lastActivityDate.getMonth() + 1
    let day = lastActivityDate.getDate()
    let year = lastActivityDate.getFullYear()

    const lastActivityDateString = `${day}/${month}/${year}`

    return (
        <>
            <div className="row">
                <div className='col-4'>
                    Last Activity
                </div>
                <div className="col-8">
                {lastActivityDateString}
                </div>
            </div>
        </>
    );
}