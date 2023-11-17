import {useEffect, useState} from 'react';
import '../SearchApp.css';

import StackSearchResultsContainer from './StackSearchResultsContainer';
import RedditSearchResultsContainer from './RedditSearchResultsContainer';

export default function SearchResultsContainer({soSearchResults, redditSearchResults}){

    return(
        <div id="so-results-container" className="container">
                <div className="row">
                    <StackSearchResultsContainer soSearchResults={soSearchResults}/>
                    <RedditSearchResultsContainer redditSearchResults={redditSearchResults}/>
                </div>
            </div>
    );
};