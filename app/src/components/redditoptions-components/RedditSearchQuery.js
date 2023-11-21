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
            <div className="col-sm-3 col-12">
                <span>Search Query</span>
            </div>
            <div className="col-sm-9 col-12">
                <input type="text" id="reddit-query-input" name="reddit-query-input" className="col" onChange={handleInputChange}/>
            </div>
        </div>
    );
}