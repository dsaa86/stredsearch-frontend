import {useEffect, useState} from 'react';
import Axios from 'axios';
import '../SearchApp.css';

export default function RedditOptions({redditSearchData, setRedditSearchData}){
    return(
        <div className="container reddit-options-container">
            <div className="row">
                <div className="col-sm">
                    <h1>Reddit Search Options</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3">
                    <span>Search Query</span>
                </div>
                <div className="col-sm">
                    <input type="text" id="reddit-query-input" name="reddit-query-input" className="col"/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3">
                    <span>Subreddits</span>
                </div>
                <div className='col-sm'>
                    <input type="text" id="reddit-subreddit-input" name="reddit-subreddit-input" className="col"/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3">
                    <span>Search By</span>
                </div>
                <div className="col-sm">
                    <select>
                        <option value="list">Questions</option>
                        <option value="list">Sub Reddits</option>
                        <option value="comments">Comments</option>
                    </select>
                </div>
            </div>
        </div>
    );
}