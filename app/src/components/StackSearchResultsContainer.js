import {useEffect, useState} from 'react';
import '../SearchApp.css';


import StackResponseContainer from './response-components/stackoverflow/StackResponseContainer';
import SearchOptionsHeader from './generic-components/search-options-header';

export default function StackSearchResultsContainer({soSearchResults}){

    return(
        <div className="col">
            <SearchOptionsHeader title={"Stack Overflow Results"} headerType={3}/>
            {
                soSearchResults.length > 0 &&
                soSearchResults.map((question, index) => {
                    return <StackResponseContainer question={question} index={index} key={question.question_id}/>
                })
            }
        </div>
    );
};