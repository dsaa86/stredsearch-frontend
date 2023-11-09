import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SOSortandOrderOptions({soSearchData, setSoSearchData}){

    return(
        <div>
            <label for="sort-options" className="row-padding row-margin">Sort By</label>
            <select id="sort-options" className="row-padding row-margin">
                <option value="activity">Activity</option>
                <option value="votes">Votes</option>
                <option value="creation">Creation</option>
                <option value="hot">Hot</option>
                <option value="week">Week</option>
                <option value="month">Month</option>
            </select>
            <label for="order-options" className="row-padding row-margin">Order By</label>
            <select id="order-options" className="row-padding row-margin">
                <option value="desc">Descending</option>
                <option value="asc">Ascending</option>
            </select>
        </div>
    );

}