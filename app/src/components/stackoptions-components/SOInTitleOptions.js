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
        <div>
            <label htmlFor="so-in-title-input">In Title</label>
            <input type="text" id="so-in-title-input" name="so-in-title-input" className="row-padding row-margin" onChange={handleChangeInTitle}/>
        </div>
    );

}