import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SODateOptions({soSearchData, setSoSearchData}){

    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");

    const handleFromDateChange = (event) => {
        setFromDate(event.target.value);
    }

    const handleToDateChange = (event) => {
        setToDate(event.target.value);
    }

    useEffect(() => {
        setSoSearchData({...soSearchData, fromDate: fromDate, toDate: toDate});
    }, [fromDate, toDate]);

    return(
        <div>
            <label for="so-from-date-input" className="row-padding row-margin">From Date</label>
            <input id="so-from-date-input" name="so-from-date-input"  className="row-padding row-margin"type="date" placeholder="From Date" onChange={handleFromDateChange}/>
            <label for="so-to-date-input" className="row-padding row-margin">To Date</label>
            <input id="so-to-date-input" name="so-to-date-input"  className="row-padding row-margin"type="date" placeholder="To Date" onChange={handleToDateChange}/>
        </div>
    );

}