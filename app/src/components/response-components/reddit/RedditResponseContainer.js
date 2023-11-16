import {useEffect, useState} from 'react';

import './RedditResponseComponentsStyle.css'

import RedditResponseSubReddit from '../reddit/RedditResponseSubReddit';
import RedditResponseTitle from '../reddit/RedditResponseTitle';

export default function RedditResponseContainer({question}) {
    const subreddit = question.question_link.replace("https://www.reddit.com/r/", "").split("/")[0];

    return (
        <div className="container reddit-response-container">
            <RedditResponseTitle title={question.question_title} link={question.question_link}/>
            <RedditResponseSubReddit subreddit={subreddit}/>
        </div>
    );
}
