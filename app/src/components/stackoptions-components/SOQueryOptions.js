import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SOQueryOptions({soSearchData, setSoSearchData}){

    return(
        <div>
            <label htmlFor="so-query-input" className="row-margin row-padding">Query</label>
            <input type="text" id="so-query-input" name="so-query-input" className="row-margin row-padding"/>
        </div>
    );

}