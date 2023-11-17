import {useEffect, useState} from 'react';
import '../SearchApp.css';


import RedditResponseContainer from './response-components/reddit/RedditResponseContainer';
import SearchOptionsHeader from './generic-components/search-options-header';


export default function RedditSearchResultsContainer({redditSearchResults}){

    return(
        <div className="col">
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