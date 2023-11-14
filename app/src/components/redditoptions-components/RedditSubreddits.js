import {useEffect, useState} from 'react';

export default function RedditSubReddits({redditSearchData, setRedditSearchData}){

    const [subreddit, setSubreddit] = useState("");

    useEffect(() => {
        setRedditSearchData({...redditSearchData, subreddit : subreddit})
    }, [subreddit]);

    const handleInputChange = (e) => {
        setSubreddit(e.target.value);
    };

    return(
        <div className="row">
                <div className="col-sm-3">
                    <span>Subreddits</span>
                </div>
                <div className='col-sm'>
                    <input type="text" id="reddit-subreddit-input" name="reddit-subreddit-input" className="col" onChange={handleInputChange}/>
                </div>
        </div>
    );
}