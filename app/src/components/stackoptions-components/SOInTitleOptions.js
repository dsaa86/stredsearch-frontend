import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SOInTitleOptions({soSearchData, setSoSearchData}){

    const [inTitle, setInTitle] = useState("");

    const handleChangeInTitle = (event) => {
        setInTitle(event.target.value);
    };

    useEffect(() => {
        setSoSearchData({
            ...soSearchData,
            intitle: inTitle
        });
    }, [inTitle]);

    return(
        <div className="row">
            <div className="col-sm-3">
                <label htmlFor="so-in-title-input">In Title</label>
            </div>
            <div className="col-sm">
                <input type="text" id="so-in-title-input" name="so-in-title-input" className="col" onChange={handleChangeInTitle}/>
            </div>
        </div>
    );

}