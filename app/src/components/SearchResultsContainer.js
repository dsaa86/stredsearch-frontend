import {useEffect, useState} from 'react';
import './SearchAppComponentsStyle.css';

import StackSearchResultsContainer from './StackSearchResultsContainer';
import RedditSearchResultsContainer from './RedditSearchResultsContainer';

export default function SearchResultsContainer({soSearchResults, redditSearchResults}){

    return(
        <div id="" className="container search-results-container">
                <div className="row">
                    <StackSearchResultsContainer soSearchResults={soSearchResults}/>
                    <RedditSearchResultsContainer redditSearchResults={redditSearchResults}/>
                </div>
            </div>
    );
};