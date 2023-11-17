import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SOPageOptions({soFieldStatus, soSearchData, setSoSearchData}){

    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(10);

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


    return(
        <div className="row">
            <div id="page-size-label-and-input" className="col-sm-6 col-12">
                <div className="row">
                    <div id="page-size-label" className="col-sm-6 col-12">
                        <label for="so-page-size-input" className="">Page Size</label>
                    </div>
                    <div id="page-size-input" className="col-sm-6 col-12">
                        <input className="col-12" id="so-page-size-input" name="so-page-size-input" min="1" max="100" type="number" onChange={pageSizeChangeHandler} disabled={!(soFieldStatus.page_size)} defaultValue={50}/>
                    </div>
                </div>
            </div>
            <div id="page-number-label-and-input" className="col-sm-6 col-12">
                <div className="row">
                    <div id="page-number-label" className="col-sm-6 col-12">
                        <label for="so-page-input" className="">Page Number</label>
                    </div>
                    <div id="page-number-input" className="col-sm-6 col-12">
                        <input className="col-12" id="so-page-input" name="so-page-input" min="1" type="number" onChange={pageNumberChangeHandler} disabled={!(soFieldStatus.page_number)} defaultValue={1}/>
                    </div>
                </div>
            </div>
        </div>
    );

}