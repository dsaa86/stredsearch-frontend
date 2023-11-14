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


export default function StackOptions({soSearchData, setSoSearchData}){

    return(
        <div className="container stack-options-container">
            <SearchOptionsHeader title={"Stack Overflow Search Options"}/>
            <SORouteSelect soSearchData={soSearchData} setSoSearchData={setSoSearchData}/>
            <SOPageOptions soSearchData={soSearchData} setSoSearchData={setSoSearchData}/>
            <SODateOptions soSearchData={soSearchData} setSoSearchData={setSoSearchData} />
            <SOSortandOrderOptions soSearchData={soSearchData} setSoSearchData={setSoSearchData}/>
            <SOTagsOptions soSearchData={soSearchData} setSoSearchData={setSoSearchData}/>
            <SONotTaggedOptions soSearchData={soSearchData} setSoSearchData={setSoSearchData} />
            <SOInTitleOptions soSearchData={soSearchData} setSoSearchData={setSoSearchData} />
            <SOUserOptions soSearchData={soSearchData} setSoSearchData={setSoSearchData} />
            <SOQueryOptions soSearchData={soSearchData} setSoSearchData={setSoSearchData} />
            <SOBodyOptions soSearchData={soSearchData} setSoSearchData={setSoSearchData} />
            <SOTickBoxOptionsContainer soSearchData={soSearchData} setSoSearchData={setSoSearchData} />
        </div>
    );
}