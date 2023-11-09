import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SOAcceptedAnswerOptions({soSearchData, setSoSearchData}){

    const [acceptedAnswer, setAcceptedAnswer] = useState(false);

    const handleChangeAcceptedAnswer = (e) => {
        setAcceptedAnswer(e.target.checked);
    }

    useEffect(() => {
        if(acceptedAnswer){
            setSoSearchData({
                ...soSearchData,
                accepted: true
            });
        } else {
            setSoSearchData({
                ...soSearchData,
                accepted: false
            });
        }
    }, [acceptedAnswer]);

    return(
        <>
            <label for="so-accepted-input">Accepted</label>
            <input type="checkbox" id="so-accepted-input" name="so-accepted-input" value="accepted" onChange={handleChangeAcceptedAnswer}/>
        </>
    );

}