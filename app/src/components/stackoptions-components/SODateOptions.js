import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SODateOptions({soFieldStatus, soSearchData, setSoSearchData}){

    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const dateFromValue = new Date();
    const dateToValue = new Date();
    dateToValue.setDate(dateToValue.getDate() + 1);
    dateFromValue.setFullYear(2000, 0, 2);
    const defaultDateFromValue = dateFromValue.toISOString().slice(0,10);
    const defaultDateToValue = dateToValue.toISOString().slice(0,10);
    
    const handleFromDateChange = (event) => {
        setFromDate(event.target.value);
    }

    const handleToDateChange = (event) => {
        setToDate(event.target.value);
    }

    useEffect(() => {
        setSoSearchData({...soSearchData, from_date: fromDate, to_date: toDate});
    }, [fromDate, toDate]);


    return(
        <div className="row">
            <div className="col-sm-6">
                <div className="row">
                    <div className="col-sm-6">
                        <label for="so-from-date-input" className="">From Date</label>
                    </div>
                    <div className="col-sm">
                        <input id="so-from-date-input" name="so-from-date-input"  className="col" type="date" placeholder="From Date" onChange={handleFromDateChange} disabled={!(soFieldStatus.from_date)} defaultValue={defaultDateFromValue} />
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="row">
                    <div className="col-sm-6">
                        <label for="so-to-date-input" className="">To Date</label>
                    </div>
                    <div className="col-sm">
                        <input id="so-to-date-input" name="so-to-date-input"  className="col" type="date" placeholder="To Date" onChange={handleToDateChange} disabled={!(soFieldStatus.to_date)} defaultValue={defaultDateToValue}/>
                    </div>
                </div>
            </div>
        </div>
    );

}