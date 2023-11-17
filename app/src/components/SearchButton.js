import axios from 'axios';
import '../SearchApp.css';
import {queryStackOverflow, queryReddit} from './functions/SearchFunctions';

export default function SearchButton({showReddit, showSO, setSoSearchResults, setRedditSearchResults, soSearchData, redditSearchData}){

    let stackCancelTokenSource;
    let redditCancelTokenSource;


    const searchButtonHandler = () => {

        if(!showReddit && !showSO){
            alert("Please select a search option");
            return;
        }
        if(showSO){
            setSoSearchResults([])
            if(stackCancelTokenSource){
                stackCancelTokenSource.cancel("Operation canceled by the user.");
            }

            stackCancelTokenSource = axios.CancelToken.source();
            queryStackOverflow(stackCancelTokenSource.token, setSoSearchResults, soSearchData);
        }
        if(showReddit){
            setRedditSearchResults([])
            if(redditCancelTokenSource){
                redditCancelTokenSource.cancel("Operation canceled by the user.");
            }
            redditCancelTokenSource = axios.CancelToken.source();
            queryReddit(redditCancelTokenSource.token, setRedditSearchResults, redditSearchData);
        }
    };

    return(
        <div className="search-app-container">
            <button onClick={searchButtonHandler}>Search</button>
        </div>
    );
}