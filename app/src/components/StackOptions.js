import { useState } from 'react';

import '../SearchApp.css';
import './stackoptions-components/StackOptionsStyle.css';

import SearchOptionsHeader from './generic-components/search-options-header';
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
import SOTickBoxOptionsContainer from './stackoptions-components/SOTickBoxOptionsContainer';

const fieldStatus = {
    "question_by_tag" : {
        "page_number" : true,
        "page_size" : true,
        "from_date" : true,
        "to_date" : true,
        "sort" : true,
        "order" : true,
        "tagged" : true,
        "nottagged" : false,
        "intitle" : false,
        "user" : false,
        "query" : false,
        "body" : false,
        "accepted" : false,
        "closed" : false,
        "migrated" : false,
        "wiki" : false,
    },
    "related_questions" : {
        "page_number" : true,
        "page_size" : true,
        "from_date" : true,
        "to_date" : true,
        "sort" : true,
        "order" : true,
        "tagged" : false,
        "nottagged" : false,
        "intitle" : false,
        "user" : false,
        "query" : true,
        "body" : false,
        "accepted" : false,
        "closed" : false,
        "migrated" : false,
        "wiki" : false,
    },
    "search" : {
        "page_number" : true,
        "page_size" : true,
        "from_date" : true,
        "to_date" : true,
        "sort" : true,
        "order" : true,
        "tagged" : true,
        "nottagged" : true,
        "intitle" : true,
        "user" : false,
        "query" : false,
        "body" : false,
        "accepted" : false,
        "closed" : false,
        "migrated" : false,
        "wiki" : false,
    },
    "advanced_search" : {
        "page_number" : true,
        "page_size" : true,
        "from_date" : true,
        "to_date" : true,
        "sort" : true,
        "order" : true,
        "tagged" : true,
        "nottagged" : true,
        "intitle" : true,
        "user" : true,
        "query" : true,
        "body" : true,
        "accepted" : true,
        "closed" : true,
        "migrated" : true,
        "wiki" : true,
    },
}



export default function StackOptions({soSearchData, setSoSearchData}){

    const [soFieldStatus, setSoFieldStatus] = useState(fieldStatus.advanced_search);

    return(
        <div className="container stack-options-container">
            <SearchOptionsHeader title={"Stack Overflow Search Options"}/>
            <SORouteSelect fieldStatus={fieldStatus} setSoFieldStatus={setSoFieldStatus} soSearchData={soSearchData} setSoSearchData={setSoSearchData}/>
            <SOPageOptions soFieldStatus={soFieldStatus} soSearchData={soSearchData} setSoSearchData={setSoSearchData}/>
            <SODateOptions soFieldStatus={soFieldStatus} soSearchData={soSearchData} setSoSearchData={setSoSearchData} />
            <SOSortandOrderOptions soFieldStatus={soFieldStatus} soSearchData={soSearchData} setSoSearchData={setSoSearchData}/>
            <SOTagsOptions soFieldStatus={soFieldStatus} soSearchData={soSearchData} setSoSearchData={setSoSearchData}/>
            <SONotTaggedOptions soFieldStatus={soFieldStatus} soSearchData={soSearchData} setSoSearchData={setSoSearchData} />
            <SOInTitleOptions soFieldStatus={soFieldStatus} soSearchData={soSearchData} setSoSearchData={setSoSearchData} />
            <SOUserOptions soFieldStatus={soFieldStatus} soSearchData={soSearchData} setSoSearchData={setSoSearchData} />
            <SOQueryOptions soFieldStatus={soFieldStatus} soSearchData={soSearchData} setSoSearchData={setSoSearchData} />
            <SOBodyOptions soFieldStatus={soFieldStatus} soSearchData={soSearchData} setSoSearchData={setSoSearchData} />
            <SOTickBoxOptionsContainer soFieldStatus={soFieldStatus} soSearchData={soSearchData} setSoSearchData={setSoSearchData} />
        </div>
    );
}