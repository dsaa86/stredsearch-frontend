import {useEffect, useState} from 'react';
import axios from 'axios';
import '../SearchApp.css';
import {queryStackOverflow} from './functions/SearchFunctions';

import StredSearch from './StredSearch';
import SearchButton from './SearchButton';
import StackResponseContainer from './response-components/stackoverflow/StackResponseContainer';

let cancelTokenSource;

export default function SearchApp(){

    const [soSearchData, setSoSearchData] = useState([]);
    const [redditSearchData, setRedditSearchData] = useState([]);

    const [showReddit, setShowReddit] = useState(false);
    const [showSO, setShowSO] = useState(false);

    const [soSearchResults, setSoSearchResults] = useState({});

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
                search_by : "list",
            }
        )
    }, []);

    const searchButtonHandler = () => {

        if(!showReddit && !showSO){
            alert("Please select a search option");
            return;
        }
        if(showSO){
            setSoSearchResults([])
            if(cancelTokenSource){
                cancelTokenSource.cancel("Operation canceled by the user.");
            }

            cancelTokenSource = axios.CancelToken.source();
            queryStackOverflow(cancelTokenSource.token, setSoSearchResults, soSearchData);
        }
        if(showReddit){
            console.log(redditSearchData);
        }
    };

    return(
        <div className="search-app-container">
            <StredSearch showReddit={showReddit} setShowReddit={setShowReddit} showSO={showSO} setShowSO={setShowSO} soSearchData={soSearchData} setSoSearchData={setSoSearchData} redditSearchData={redditSearchData} setRedditSearchData={setRedditSearchData}/>
            <SearchButton buttonHandler={searchButtonHandler}/>
            <div id="so-results-container" className="container">
                {
                    soSearchResults.length > 0 &&
                    soSearchResults.map((question, index) => {
                        return <StackResponseContainer question={question} index={index} key={question.question_id}/>
                    })
                }
            </div>
        </div>
    );
}