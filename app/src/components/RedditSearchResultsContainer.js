import {useEffect, useState} from 'react';
import './SearchAppComponentsStyle.css';


import RedditResponseContainer from './response-components/reddit/RedditResponseContainer';
import SearchOptionsHeader from './generic-components/search-options-header';


export default function RedditSearchResultsContainer({redditSearchResults}){

    return(
        <div className="col reddit-search-results-container">
            <SearchOptionsHeader title={"Reddit Results"} headerType={3}/>
            {
                redditSearchResults.length > 0 &&
                redditSearchResults.map((question, index) => {
                    return <RedditResponseContainer question={question} index={index} key={question.question_id}/>
                })
            }
        </div>
    );
};