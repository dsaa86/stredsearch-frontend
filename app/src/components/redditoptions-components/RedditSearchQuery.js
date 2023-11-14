import {useEffect, useState} from 'react';

export default function RedditSearchQuery({redditSearchData, setRedditSearchData}){

    const [query, setQuery] = useState("");

    useEffect(() => {
        setRedditSearchData({...redditSearchData, query : query})
    }, [query]);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    return(
        <div className="row">
            <div className="col-sm-3">
                <span>Search Query</span>
            </div>
            <div className="col-sm">
                <input type="text" id="reddit-query-input" name="reddit-query-input" className="col" onChange={handleInputChange}/>
            </div>
        </div>
    );
}