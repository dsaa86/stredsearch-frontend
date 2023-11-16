import {useEffect, useState} from 'react';
import './RedditResponseComponentsStyle.css'


export default function RedditResponseSubreddits({subreddit}) {

    return (
        <div className="row">
            <div className="col-2 question-tag-element">
                <p>{subreddit}</p>
            </div>
        </div>
    );
}