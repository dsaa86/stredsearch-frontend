import {useEffect, useState} from 'react';
import '../SearchApp.css';


import StredSearch from './StredSearch';
import StackResponseContainer from './response-components/stackoverflow/StackResponseContainer';
import RedditResponseContainer from './response-components/reddit/RedditResponseContainer';

const useSearchAppController = () => {

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

    return {
        soSearchData: soSearchData,
        setSoSearchData: setSoSearchData,
        redditSearchData: redditSearchData,
        setRedditSearchData: setRedditSearchData,
        showReddit: showReddit,
        setShowReddit: setShowReddit,
        showSO: showSO,
        setShowSO: setShowSO,
        soSearchResults: soSearchResults,
        setSoSearchResults: setSoSearchResults,
        redditSearchResults: redditSearchResults,
        setRedditSearchResults: setRedditSearchResults,
    };  
};

export default function SearchApp(){

    const searchAppController = useSearchAppController();

    return(
        <div className="search-app-container">
            <StredSearch showReddit={searchAppController.showReddit} setShowReddit={searchAppController.setShowReddit} showSO={searchAppController.showSO} setShowSO={searchAppController.setShowSO} soSearchData={searchAppController.soSearchData} setSoSearchData={searchAppController.setSoSearchData} redditSearchData={searchAppController.redditSearchData} setRedditSearchData={searchAppController.setRedditSearchData} setSoSearchResults={searchAppController.setSoSearchResults} setRedditSearchResults={searchAppController.setRedditSearchResults} />
            
            <div id="so-results-container" className="container">
                <div className="row">
                    <div className="col">
                        <h3>Stack Overflow Results</h3>
                        {
                            searchAppController.soSearchResults.length > 0 &&
                            searchAppController.soSearchResults.map((question, index) => {
                                return <StackResponseContainer question={question} index={index} key={question.question_id}/>
                            })
                        }
                    </div>
                    <div className="col">
                        <h3>Reddit Results</h3>
                        {
                            searchAppController.redditSearchResults.length > 0 &&
                            searchAppController.redditSearchResults.map((question, index) => {
                                return <RedditResponseContainer question={question} index={index} key={question.question_id}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );


}


