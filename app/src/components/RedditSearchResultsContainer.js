import './SearchAppComponentsStyle.css';


import RedditResponseContainer from './response-components/reddit/RedditResponseContainer';
import SearchOptionsHeader from './generic-components/search-options-header';


export default function RedditSearchResultsContainer({redditSearchResults}){

    return(
        <div className="col-sm-12 col-xl-6 reddit-search-results-container">
            <div className="row">
                <div className="col-12">
                    <SearchOptionsHeader title={"Reddit Results"}/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    {
                        redditSearchResults.length > 0 &&
                        redditSearchResults.map((question, index) => {
                            return <RedditResponseContainer question={question} index={index} key={question.question_id}/>
                        })
                    }    
                </div>
            </div>
            
        </div>
    );
};