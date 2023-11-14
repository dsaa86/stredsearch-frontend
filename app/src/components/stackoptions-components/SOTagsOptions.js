import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SOTagsOptions({soFieldStatus, soSearchData, setSoSearchData}){
    const [soTags, setSoTags] = useState("");

    const handleChangeTags = (e) => {
        setSoTags(e.target.value);
    };

    useEffect(() => {
        setSoSearchData({
            ...soSearchData,
            tags: soTags
        });
    }, [soTags]);


    return(
        <div className="row">
            <div className="col-sm-3">
                <label htmlFor="so-tag-input" className="">Question Tags</label>
            </div>
            <div className="col-sm">
                <input type="text" id="so-tag-input" name="so-tag-input" className="col" onChange={handleChangeTags} disabled={!(soFieldStatus.tagged)}/>
            </div>
        </div>
    );

}