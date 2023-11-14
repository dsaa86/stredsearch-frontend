import {useEffect, useState} from 'react';
import '../SearchApp.css';

import StredSearch from './StredSearch';
import SearchButton from './SearchButton';


export default function SearchApp(){

    const [soSearchData, setSoSearchData] = useState([]);
    const [redditSearchData, setRedditSearchData] = useState([]);

    const [showReddit, setShowReddit] = useState(false);
    const [showSO, setShowSO] = useState(false);

    useEffect(() => {
        setSoSearchData(
            {
                category : "questions",
                route : "question_by_tag",
                page : "1",
                pagesize : "50",
                from_date : "",
                to_date : "",
                sort: "activity",
                order : "desc",
                tagged : "html,css,react",
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
                search_by : "list",
            }
        )
    }, []);



    return(
        <div className="search-app-container">
            <StredSearch showReddit={showReddit} setShowReddit={setShowReddit} showSO={showSO} setShowSO={setShowSO} soSearchData={soSearchData} setSoSearchData={setSoSearchData} redditSearchData={redditSearchData} setRedditSearchData={setRedditSearchData}/>
            <SearchButton />
        </div>
    );
}