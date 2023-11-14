import {useEffect, useState} from 'react';
import Axios from 'axios';
import '../SearchApp.css';

import SoRedditPicker from './SO-RedditPicker';
import StackOptions from './StackOptions';
import RedditOptions from './RedditOptions';

export default function StredSearch({showReddit, setShowReddit, showSO, setShowSO, soSearchData, setSoSearchData, redditSearchData, setRedditSearchData}){

    // const [soCategory, setSoCategory] = useState("");
    // const [soRoutes, setSoRoutes] = useState([]);

    const soCheckHandler = () => {
        setShowSO(!showSO);
    }

    const redditCheckHandler = () => {
        setShowReddit(!showReddit);
    }

    return(
        <div className="stredsearch-container">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Which online repo would you like to search?</h2>
                    </div>
                </div>
                <div class="row">
                    <SoRedditPicker showSO={showSO} showReddit={showReddit} soCheckHandler={soCheckHandler} redditCheckHandler={redditCheckHandler}/>
                </div>
            </div>
            {showSO &&
                        <StackOptions soSearchData={soSearchData} setSoSearchData={setSoSearchData}/>
            }
            {showReddit &&
                <RedditOptions redditSearchData={redditSearchData} setRedditSearchData={setRedditSearchData}/>
            }
        </div>
    );
}