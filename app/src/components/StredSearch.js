import {useEffect, useState} from 'react';
import Axios from 'axios';
import '../SearchApp.css';

import SoRedditPicker from './SO-RedditPicker';
import StackOptions from './StackOptions';
import RedditOptions from './RedditOptions';

export default function StredSearch({soSearchData, setSoSearchData}){

    const [showReddit, setShowReddit] = useState(false);
    const [showSO, setShowSO] = useState(false);

    const [soCategory, setSoCategory] = useState("");
    const [soRoutes, setSoRoutes] = useState([]);

    const soCheckHandler = () => {
        setShowSO(!showSO);
    }

    const redditCheckHandler = () => {
        setShowReddit(!showReddit);
    }

    // const [soParams, setSoParams] = useState([]);

    // const routes = soRouteData.map(route =>
    //     <div>
    //         {route}
    //     </div>
    // );

    return(
        <div className="stredsearch-container">
            <div>
                <span>Which online repo would you like to search?</span>
                <SoRedditPicker showSO={showSO} showReddit={showReddit} soCheckHandler={soCheckHandler} redditCheckHandler={redditCheckHandler}/>
                {showSO &&
                    <StackOptions soSearchData={soSearchData} setSoSearchData={setSoSearchData}/>
                }
                {showReddit &&
                    <RedditOptions />
                }
            </div>
        </div>
    );
}