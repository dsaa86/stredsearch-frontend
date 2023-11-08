import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SODateOptions({soRouteData}){

    return(
        <div>
            <label for="so-from-date-input" className="row-padding row-margin">From Date</label>
            <input id="so-from-date-input" name="so-from-date-input"  className="row-padding row-margin"type="date" placeholder="From Date"/>
            <label for="so-to-date-input" className="row-padding row-margin">To Date</label>
            <input id="so-to-date-input" name="so-to-date-input"  className="row-padding row-margin"type="date" placeholder="To Date"/>
        </div>
    );

}

