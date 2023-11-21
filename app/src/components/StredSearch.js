import {useEffect, useState} from 'react';
import Axios from 'axios';
import './SearchAppComponentsStyle.css';

import SoRedditPicker from './SO-RedditPicker';
import StackOptions from './StackOptions';
import RedditOptions from './RedditOptions';
import SearchOptionsHeader from './generic-components/search-options-header';
import SearchButton from './SearchButton';

export default function StredSearch({showReddit, setShowReddit, showSO, setShowSO, soSearchData, setSoSearchData, redditSearchData, setRedditSearchData, setSoSearchResults, setRedditSearchResults}){

    const soCheckHandler = () => {
        setShowSO(!showSO);
    }

    const redditCheckHandler = () => {
        setShowReddit(!showReddit);
    }

    return(
        <div className="stredsearch-container">
            <div className="container">
                <SearchOptionsHeader title={"Select Online Repos for Searching"} headerType={1}/>
                <SoRedditPicker showSO={showSO} showReddit={showReddit} soCheckHandler={soCheckHandler} redditCheckHandler={redditCheckHandler}/>
            </div>
            {showSO &&
                        <StackOptions soSearchData={soSearchData} setSoSearchData={setSoSearchData}/>
            }
            {showReddit &&
                <RedditOptions redditSearchData={redditSearchData} setRedditSearchData={setRedditSearchData}/>
            }
            <SearchButton showReddit={showReddit} showSO={showSO} setSoSearchResults={setSoSearchResults} setRedditSearchResults={setRedditSearchResults} soSearchData={soSearchData} redditSearchData={redditSearchData}/>
        </div>
    );
}