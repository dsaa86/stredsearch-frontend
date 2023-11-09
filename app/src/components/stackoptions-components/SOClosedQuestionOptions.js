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
        <>
        <label for="so-closed-input">Closed</label>
        <input type="checkbox" id="so-closed-input" name="so-closed-input" value="closed" onChange={handleChangeClosedQuestion}/>
        </>
    );

}