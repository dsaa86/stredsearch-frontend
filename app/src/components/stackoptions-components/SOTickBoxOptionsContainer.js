import {useEffect, useState} from 'react';
import './StackOptionsStyle.css';

import SOAcceptedAnswerOptions from './SOAcceptedAnswerOptions';
import SOClosedQuestionOptions from './SOClosedQuestionOptions';
import SOMigratedQuestionOptions from './SOMigratedQuestionOptions';
import SOHasWikiOptions from './SOHasWikiOptions';

export default function SOTickBoxOptionsContainer({soSearchData, setSoSearchData}){

    return(
        <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm">
                <div className="row">
                    <SOAcceptedAnswerOptions soSearchData={soSearchData} setSoSearchData={setSoSearchData} />
                    <SOClosedQuestionOptions soSearchData={soSearchData} setSoSearchData={setSoSearchData} />
                    <SOMigratedQuestionOptions soSearchData={soSearchData} setSoSearchData={setSoSearchData} />
                    <SOHasWikiOptions soSearchData={soSearchData} setSoSearchData={setSoSearchData} />
                </div>
            </div>
        </div>
    );

}