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
        const fromDateObject = new Date(fromDate);
        let fromDateString = String(fromDateObject.getTime());
        const toDateObject = new Date(toDate)
        let toDateString = String(toDateObject.getTime());

        if (toDateString == "NaN"){
            toDateString = String(new Date().getTime());
        }
        if (fromDateString == "NaN"){
            const dateObj = new Date()
            dateObj.setFullYear(2000, 0, 2);
            fromDateString = String(dateObj.getTime());
        }

        setSoSearchData({...soSearchData, from_date: fromDateString, to_date: toDateString});
    }, [fromDate, toDate]);


    return(
        <div className="row">
            <div id="from-date-label-and-input" className="col-md-6 col-sm-12 col-12">
                <div className="row">
                    <div id="from-date-label" className="col-md-6 col-sm-12 col-12">
                        <label for="so-from-date-input" className="">From Date</label>
                    </div>
                    <div id="from-date-input" className="col-md-6 col-sm-12 col-12">
                        <input id="so-from-date-input" name="so-from-date-input"  className="col-12" type="date" placeholder="From Date" onChange={handleFromDateChange} disabled={!(soFieldStatus.from_date)} defaultValue={defaultDateFromValue} />
                    </div>
                </div>
            </div>
            <div id="to-date-label-and-input" className="col-md-6 col-sm-12 col-12">
                <div className="row">
                    <div id="to-date-label" className="col-md-6 col-sm-12 col-12">
                        <label for="so-to-date-input" className="">To Date</label>
                    </div>
                    <div id="to-date-input" className="col-md-6 col-sm-12 col-12">
                        <input id="so-to-date-input" name="so-to-date-input"  className="col-12" type="date" placeholder="To Date" onChange={handleToDateChange} disabled={!(soFieldStatus.to_date)} defaultValue={defaultDateToValue}/>
                    </div>
                </div>
            </div>
        </div>
    );

}