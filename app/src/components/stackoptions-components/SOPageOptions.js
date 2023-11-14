import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SOPageOptions({soFieldStatus, soSearchData, setSoSearchData}){

    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [pageNumberEnabled, setPageNumberEnabled] = useState(true);
    const [pageSizeEnabled, setPageSizeEnabled] = useState(true);

    const pageNumberChangeHandler = (e) => {
        setPageNumber(e.target.value);
    }

    const pageSizeChangeHandler = (e) => {
        setPageSize(e.target.value);
    }
    
    useEffect(() => {
        if(pageNumber < 1){
            setPageNumber(1);
        }
        if(pageSize < 1){
            setPageSize(1);
        }
        if(pageSize > 100){
            setPageSize(100);
        }
        setSoSearchData({...soSearchData, page: pageNumber, pagesize: pageSize});
    }, [pageNumber, pageSize]);

    useEffect(() => {
        // Obj stores fields as enabled==true or disabled==false; the 'disabled' attribute of the input requires the negation of the object's value to work.
        setPageNumberEnabled(!(soFieldStatus.page_number));
        setPageSizeEnabled(!(soFieldStatus.page_size));
    }, [soFieldStatus.page_size, soFieldStatus.page_number]);



    return(
        <div className="row">
            <div className="col-sm-6">
                <div className="row">
                    <div className="col-sm-6">
                        <label for="so-page-size-input" className="">Page Size</label>
                    </div>
                    <div className="col-sm">
                        <input className="col" id="so-page-size-input" name="so-page-size-input" min="1" max="100" type="number" onChange={pageSizeChangeHandler} disabled={pageSizeEnabled} />
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="row">
                    <div className="col-sm-6">
                        <label for="so-page-input" className="">Page Number</label>
                    </div>
                    <div className="col-sm">
                        <input className="col" id="so-page-input" name="so-page-input" min="1" className="" type="number" onChange={pageNumberChangeHandler} disabled={pageNumberEnabled} />
                    </div>
                </div>
            </div>
        </div>
    );

}