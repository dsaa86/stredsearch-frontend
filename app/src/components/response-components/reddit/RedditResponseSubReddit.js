import {useEffect, useState} from 'react';
import './RedditResponseComponentsStyle.css'


export default function RedditResponseSubreddits({subreddits}) {

    return (
        <div className="row">
            <div className="col stack-title">
                <p>{subreddits}</p>
            </div>
        </div>
    );
}