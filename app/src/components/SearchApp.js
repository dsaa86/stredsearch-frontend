import {useEffect, useState} from 'react';
import '../SearchApp.css';

import StredSearch from './StredSearch';
import SearchButton from './SearchButton';


export default function SearchApp(){

    const [soSearchData, setSoSearchData] = useState([]);
    const [redditSearchData, setRedditSearchData] = useState([]);

    const [showReddit, setShowReddit] = useState(false);
    const [showSO, setShowSO] = useState(false);

    const searchButtonHandler = () => {
        if(!showReddit && !showSO){
            alert("Please select a search option");
            return;
        }
        if(showSO){
            console.log(soSearchData);
        }
        if(showReddit){
            console.log(redditSearchData);
        }
    };

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

    const queryStackOverflow = () => {
        const category = soSearchData.category;
        const route = soSearchData.route;
        const page =  String(soSearchData.page).length >= 1 ? String(soSearchData.page) : "1";
        const pagesize = String(soSearchData.pagesize).length >= 1 ? String(soSearchData.pagesize) : "50";
        const from_date = soSearchData.from_date.length >= 1 ? soSearchData.from_date : " ";
        const to_date = soSearchData.to_date.length >= 1 ? soSearchData.to_date : " ";
        const resultsSort= soSearchData.resultsSort;
        const order = soSearchData.order;
        const tagged = soSearchData.tagged.length >= 1 ? soSearchData.tagged : " ";
        const site = soSearchData.site.length >= 1 ? soSearchData.site : " ";
        const nottagged = soSearchData.nottagged.length >= 1 ? soSearchData.nottagged : " ";
        const intitle = soSearchData.intitle.length >= 1 ? soSearchData.intitle : " ";
        const user = soSearchData.user.length >= 1 ? soSearchData.user : " ";
        const query = soSearchData.query.length >= 1 ? soSearchData.query : " ";
        const body = soSearchData.body.length >= 1 ? soSearchData.body : " ";
        const accepted = soSearchData.accepted === true ? "true" : " ";
        const closed = soSearchData.closed === true ? "true" : " ";
        const migrated = soSearchData.migrated === true ? "true" : " ";
        const wiki = soSearchData.wiki === true ? "true" : " ";

        const url = ''

        if (route === "question_by_tag"){
            url = `http://localhost:8000/stack/get/question_by_tag/${page}/${pagesize}/${from_date}/${to_date}/${order}/${resultsSort}/${tagged}/`;
        } else if (route === "related_questions"){
            url = `http://localhost:8000/stack/get/related_questions/${page}/${pagesize}/${from_date}/${to_date}/${order}/${resultsSort}/${query}/`;
        } else if (route === "search"){
            url = `http://localhost:8000/stack/get/simple_search/${page}/${pagesize}/${from_date}/${to_date}/${order}/${resultsSort}/${nottagged}/${tagged}/${intitle}/`;
        } else if (route === "advanced_search"){
            url = `http://localhost:8000/stack/get/advanced_search/${page}/${pagesize}/${from_date}/${to_date}/${order}/${resultsSort}/${query}/${accepted}/ /${body}/${closed}/${migrated}/ /${nottagged}/${tagged}/${intitle}/${user}/ / /${wiki}/`;
        }
    };



    return(
        <div className="search-app-container">
            <StredSearch showReddit={showReddit} setShowReddit={setShowReddit} showSO={showSO} setShowSO={setShowSO} soSearchData={soSearchData} setSoSearchData={setSoSearchData} redditSearchData={redditSearchData} setRedditSearchData={setRedditSearchData}/>
            <SearchButton buttonHandler={searchButtonHandler}/>
        </div>
    );
}