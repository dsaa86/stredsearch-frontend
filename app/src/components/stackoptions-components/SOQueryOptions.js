import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SOQueryOptions({soSearchData, setSoSearchData}){

    const [query, setQuery] = useState("");

    const handleChangeQuery = (event) => {
        setQuery(event.target.value);
    }

    useEffect(() => {
        setSoSearchData({...soSearchData, query: query});
    }, [query]);

    return(
        <div>
            <label htmlFor="so-query-input" className="row-margin row-padding">Query</label>
            <input type="text" id="so-query-input" name="so-query-input" className="row-margin row-padding" onChange={handleChangeQuery}/>
        </div>
    );
    
}