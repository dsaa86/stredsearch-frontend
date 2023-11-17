import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SOAcceptedAnswerOptions({soFieldStatus, soSearchData, setSoSearchData}){

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
        <div className="col-12 col-sm-12 col-md-6">
            <div className="row">
                <div className="col-2">
                    <label for="so-accepted-input" className="col">Accepted</label>
                </div>
                <div className="col-10">
                    <input type="checkbox" id="so-accepted-input" name="so-accepted-input" value="accepted" className="col" onChange={handleChangeAcceptedAnswer} disabled={!(soFieldStatus.accepted)} />
                </div>
            </div>
        </div>
    );

}