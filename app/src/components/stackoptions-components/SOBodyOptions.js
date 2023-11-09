import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SOBodyOptions({soSearchData, setSoSearchData}){

    const [body, setBody] = useState("");

    const handleChangeBody = (event) => {
        setBody(event.target.value);
    };

    useEffect(() => {
        setSoSearchData({
            ...soSearchData,
            body: body
        });
    }, [body]);

    return(
        <div>
            <label for="so-body-input" className="row-margin row-padding">Body</label>
            <input type="text" id="so-body-input" name="so-body-input" className="row-margin row-padding" onChange={handleChangeBody}/>
        </div>
    );

}