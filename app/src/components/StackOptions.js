import {useEffect, useState} from 'react';
import Axios from 'axios';
import '../SearchApp.css';
import './stackoptions-components/StackOptionsStyle.css';

import { extractUniqueValuesFromArray, prettifyString } from '../AppHelperFunctions';

import SORouteSelect from './stackoptions-components/SORouteSelect';
import SOPageOptions from './stackoptions-components/SOPageOptions';
import SODateOptions from './stackoptions-components/SODateOptions';
import SOSortandOrderOptions from './stackoptions-components/SOSortandOrderOptions';
import SOTagsOptions from './stackoptions-components/SOTagsOptions';
import SONotTaggedOptions from './stackoptions-components/SONotTaggedOptions';
import SOInTitleOptions from './stackoptions-components/SOInTitleOptions';
import SOUserOptions from './stackoptions-components/SOUserOptions';
import SOQueryOptions from './stackoptions-components/SOQueryOptions';
import SOBodyOptions from './stackoptions-components/SOBodyOptions';
import SOAcceptedAnswerOptions from './stackoptions-components/SOAcceptedAnswerOptions';
import SOClosedQuestionOptions from './stackoptions-components/SOClosedQuestionOptions';
import SOMigratedQuestionOptions from './stackoptions-components/SOMigratedQuestionOptions';
import SOHasWikiOptions from './stackoptions-components/SOHasWikiOptions';


export default function StackOptions(){

    return(
        <div className="stack-options-container">
            <SORouteSelect/>
            <SOPageOptions />
            <SODateOptions />
            <SOSortandOrderOptions />
            <SOTagsOptions />
            <SONotTaggedOptions />
            <SOInTitleOptions />
            <SOUserOptions />
            <SOQueryOptions />
            <SOBodyOptions />
            <SOAcceptedAnswerOptions />
            <SOClosedQuestionOptions />
            <SOMigratedQuestionOptions />
            <SOHasWikiOptions />
            
            
            
            
            
            
            
            
            
            
            
        </div>
    );
}