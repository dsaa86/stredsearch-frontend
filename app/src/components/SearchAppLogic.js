import {useEffect, useState} from 'react';
import '../SearchApp.css';

import SearchAppRender from './SearchAppRender';

export default function SearchAppLogic(){

    const [soSearchData, setSoSearchData] = useState([]);
    const [redditSearchData, setRedditSearchData] = useState([]);

    const [showReddit, setShowReddit] = useState(false);
    const [showSO, setShowSO] = useState(false);

    const [soSearchResults, setSoSearchResults] = useState([]);
    const [redditSearchResults, setRedditSearchResults] = useState([]);

    useEffect(() => {
        setSoSearchData(
            {
                category : "questions",
                route : "question_by_tag",
                page : "1",
                pagesize : "50",
                from_date : "",
                to_date : "",
                resultsSort: "activity",
                order : "desc",
                tagged : "",
                site : "stackoverflow",
                nottagged : "",
                intitle : "",
                user : "",
                query : "",
                body : "", 
                accepted : false,
                closed : false,
                migrated : false,
                wiki : false,
            }
        )
    }, []);

    useEffect(() => {
        setRedditSearchData(
            {
                query : "",
                subreddit : "",
                search_by : "link",
            }
        )
    }, []);

    return(
        <SearchAppRender soSearchData={soSearchData} setSoSearchData={setSoSearchData} redditSearchData={redditSearchData} setRedditSearchData={setRedditSearchData} showReddit={showReddit} setShowReddit={setShowReddit} showSO={showSO} setShowSO={setShowSO} soSearchResults={soSearchResults} setSoSearchResults={setSoSearchResults} redditSearchResults={redditSearchResults} setRedditSearchResults={setRedditSearchResults} />
    );
}