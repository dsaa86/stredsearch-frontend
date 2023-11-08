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


export default function StackOptions({soRouteData}){

    return(
        <div className="stack-options-container">
            <SORouteSelect soRouteData={soRouteData}/>
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
            
            
            
            
            
            
            <input type="checkbox" id="so-accepted-input" name="so-accepted-input" value="accepted"/>
            <label for="so-accepted-input">Accepted</label>
            <input type="checkbox" id="so-closed-input" name="so-closed-input" value="closed"/>
            <label for="so-closed-input">Closed</label>
            <input type="checkbox" id="so-migrated-input" name="so-migrated-input" value="migrated"/>
            <label for="so-migrated-input">Migrated</label>
            <input type="checkbox" id="so-wiki-input" name="so-wiki-input" value="wiki"/>
            <label for="so-wiki-input">Wiki</label>
            <input type="checkbox" id="so-notice-input" name="so-notice-input" value="notice"/>
            <label for="so-notice-input">Notice</label>
        </div>
    );
}