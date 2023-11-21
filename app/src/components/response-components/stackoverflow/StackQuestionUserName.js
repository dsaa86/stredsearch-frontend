import {useEffect, useState} from 'react';
import '../../SearchAppComponentsStyle.css';


export default function StackQuestionUser({username}) {

    return (
            <>
                <div className="row">
                    <div className='col-4'>
                        User Name
                    </div>
                    <div className="col-8">
                        {username}
                    </div>
                </div>
            </>
    );
}