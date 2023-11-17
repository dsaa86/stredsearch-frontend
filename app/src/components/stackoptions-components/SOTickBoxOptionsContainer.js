import {useEffect, useState} from 'react';
import './StackOptionsStyle.css';

import SOAcceptedAnswerOptions from './SOAcceptedAnswerOptions';
import SOClosedQuestionOptions from './SOClosedQuestionOptions';
import SOMigratedQuestionOptions from './SOMigratedQuestionOptions';
import SOHasWikiOptions from './SOHasWikiOptions';

export default function SOTickBoxOptionsContainer({soFieldStatus, soSearchData, setSoSearchData}){

    return(
        <div className="row">
            <div className="col-sm-3 col-0"></div>
            <div className="col-sm-9">
                <div className="row">
                    <SOAcceptedAnswerOptions soFieldStatus={soFieldStatus} soSearchData={soSearchData} setSoSearchData={setSoSearchData} />
                    <SOClosedQuestionOptions soFieldStatus={soFieldStatus} soSearchData={soSearchData} setSoSearchData={setSoSearchData} />
                    <SOMigratedQuestionOptions soFieldStatus={soFieldStatus} soSearchData={soSearchData} setSoSearchData={setSoSearchData} />
                    <SOHasWikiOptions soFieldStatus={soFieldStatus} soSearchData={soSearchData} setSoSearchData={setSoSearchData} />
                </div>
            </div>
        </div>
    );

}