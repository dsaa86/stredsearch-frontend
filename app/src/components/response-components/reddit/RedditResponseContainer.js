import {useEffect, useState} from 'react';

import './RedditResponseComponentsStyle.css'

import RedditResponseSubReddit from '../reddit/RedditResponseSubReddit';
import RedditResponseTitle from '../reddit/RedditResponseTitle';

export default function RedditResponseContainer({question}) {

    return (
        <div className="container stack-response-container">
            <RedditResponseTitle title={question.title} link={question.link}/>
            <RedditResponseSubReddit subreddits={question.subreddits}/>
        </div>
    );
}
