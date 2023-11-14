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
            <div className="col-sm-6">
                <div className="row">
                    <div className="col-sm-6">
                        <label for="so-page-size-input" className="">Page Size</label>
                    </div>
                    <div className="col-sm">
                        <input className="col" id="so-page-size-input" name="so-page-size-input" min="1" max="100" type="number" onChange={pageSizeChangeHandler} disabled={!(soFieldStatus.page_size)} defaultValue={50}/>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="row">
                    <div className="col-sm-6">
                        <label for="so-page-input" className="">Page Number</label>
                    </div>
                    <div className="col-sm">
                        <input className="col" id="so-page-input" name="so-page-input" min="1" type="number" onChange={pageNumberChangeHandler} disabled={!(soFieldStatus.page_number)} defaultValue={1}/>
                    </div>
                </div>
            </div>
        </div>
    );

}