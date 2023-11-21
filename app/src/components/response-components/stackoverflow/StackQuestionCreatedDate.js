import {useEffect, useState} from 'react';
import '../../SearchAppComponentsStyle.css';


export default function StackQuestionCreatedDate({created}) {
    const createdDate = new Date(created)
    let month = createdDate.getMonth() + 1
    let day = createdDate.getDate()
    let year = createdDate.getFullYear()

    const createdDateString = `${day}/${month}/${year}`
    return (

        <>
            <div className="row">
                <div className='col-4'>
                    Question Created
                </div>
                <div className="col-8">
                {createdDateString}
                </div>
            </div>
        </>
    );
}