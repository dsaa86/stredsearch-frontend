import {useEffect, useState} from 'react';
import Axios from 'axios';
import '../SearchApp.css';

import { extractUniqueValuesFromArray, prettifyString } from '../AppHelperFunctions';
import StredSearch from './StredSearch';


export default function SearchApp({soSearchData, setSoSearchData}){
    return(
        <div className="search-app-container">
            <StredSearch soSearchData={soSearchData} setSoSearchData={setSoSearchData}/>
        </div>
    );
}