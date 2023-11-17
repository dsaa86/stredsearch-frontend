import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SOQueryOptions({soFieldStatus, soSearchData, setSoSearchData}){

    const [query, setQuery] = useState("");

    const handleChangeQuery = (event) => {
        setQuery(event.target.value);
    }

    useEffect(() => {
        setSoSearchData({...soSearchData, query: query});
    }, [query]);

    return(
        <div className="row">
            <div className="col-sm-3 col-12">
                <label htmlFor="so-query-input" className="">Query</label>
            </div>
            <div className="col-sm-9 col-12">
                <input type="text" id="so-query-input" name="so-query-input" className="col" onChange={handleChangeQuery} disabled={!(soFieldStatus.query)} />
            </div>
        </div>
    );
    
}