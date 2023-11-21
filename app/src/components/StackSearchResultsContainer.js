import {useEffect, useState} from 'react';
import './SearchAppComponentsStyle.css';


import StackResponseContainer from './response-components/stackoverflow/StackResponseContainer';
import SearchOptionsHeader from './generic-components/search-options-header';

export default function StackSearchResultsContainer({soSearchResults}){

    return(
        <div className="col-sm-12 col-xl-6 stack-search-results-container">
            <div className="row">
                <div className="col-12">
                    <SearchOptionsHeader title={"Stack Overflow Results"}/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    {
                        soSearchResults.length > 0 &&
                        soSearchResults.map((question, index) => {
                            return <StackResponseContainer question={question} index={index} key={question.question_id}/>
                        })
                    }
                </div>
            </div>
            
        </div>
    );
};