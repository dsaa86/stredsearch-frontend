import {useEffect, useState} from 'react';

export default function RedditSearchBy({redditSearchData, setRedditSearchData}){

    const [searchBy, setSearchBy] = useState("list");

    useEffect(() => {
        setRedditSearchData({...redditSearchData, search_by : searchBy})
    }, [searchBy]);

    const handleInputChange = (e) => {
        setSearchBy(e.target.value);
    };

    return(
        <div className="row">
                <div className="col-sm-3">
                    <span>Search By</span>
                </div>
                <div className="col-sm">
                    <select onChange={handleInputChange}>
                        <option value="list">Questions</option>
                        <option value="src">Sub Reddits</option>
                        <option value="comments">Comments</option>
                    </select>
                </div>
            </div>
    );
}