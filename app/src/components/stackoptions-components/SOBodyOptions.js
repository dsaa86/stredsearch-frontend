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
        <div className="row">
            <div className="col-sm-3">
                <label for="so-body-input" className="">Body</label>
            </div>
            <div className="col-sm">
                <input type="text" id="so-body-input" name="so-body-input" className="col" onChange={handleChangeBody}/>
            </div>
        </div>
    );

}