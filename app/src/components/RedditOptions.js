import {useEffect, useState} from 'react';
import Axios from 'axios';
import '../SearchApp.css';

export default function RedditOptions(){
    return(
        <div className="reddit-options-container">
            <input type="text" id="reddit-query-input" name="reddit-query-input" placeholder="Query"/>
            <input type="text" id="reddit-subreddit-input" name="reddit-subreddit-input" placeholder="Subreddits"/>
            <select>
                <option value="na">N/A</option>
                <option value="list">Questions</option>
                <option value="list">Sub Reddits</option>
                <option value="comments">Comments</option>
            </select>
        </div>
    );
}