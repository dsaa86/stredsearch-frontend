import {useEffect, useState} from 'react';
import Axios from 'axios';
import '../SearchApp.css';

import { extractUniqueValuesFromArray, prettifyString } from '../AppHelperFunctions';
import StredSearch from './StredSearch';


export default function SearchButton({buttonHandler}){

    return(
        <div className="search-app-container">
            <button onClick={buttonHandler}>Search</button>
        </div>
    );
}