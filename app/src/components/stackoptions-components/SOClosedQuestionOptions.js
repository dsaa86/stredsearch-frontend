import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SOClosedQuestionOptions({soSearchData, setSoSearchData}){

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
        <div className="col-sm">
            <div className="row">
                <div className="col-sm-3">
                    <label for="so-closed-input" className="col">Closed</label>
                </div>
                <div className="col-sm">
                    <input type="checkbox" id="so-closed-input" name="so-closed-input" value="closed" className="col" onChange={handleChangeClosedQuestion}/>
                </div>
            </div>
        </div>
    );

}