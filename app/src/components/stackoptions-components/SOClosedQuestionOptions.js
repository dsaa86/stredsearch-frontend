import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SOClosedQuestionOptions({soFieldStatus, soSearchData, setSoSearchData}){

    const [closedQuestion, setClosedQuestion] = useState(false);
    const handleChangeClosedQuestion = (e) => {
        setClosedQuestion(e.target.checked);
    }

    useEffect(() => {
        if(closedQuestion){
            setSoSearchData({
                ...soSearchData,
                closed: true
            });
        } else {
            setSoSearchData({
                ...soSearchData,
                closed: false
            });
        }
    }, [closedQuestion]);

    return(
        <div className="col-12 col-sm-12 col-md-6">
            <div className="row">
                <div className="col-2">
                    <label for="so-closed-input" className="col">Closed</label>
                </div>
                <div className="col-10">
                    <input type="checkbox" id="so-closed-input" name="so-closed-input" value="closed" className="col" onChange={handleChangeClosedQuestion} disabled={!(soFieldStatus.closed)} />
                </div>
            </div>
        </div>
    );

}