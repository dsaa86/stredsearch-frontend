import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SOPageOptions({soSearchData, setSoSearchData}){

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
        <div>
            <label for="so-page-size-input" className="row-padding row-margin">Page Size</label>
            <input id="so-page-size-input" name="so-page-size-input" min="1" max="100" className="row-padding numeric-input" type="number" onChange={pageSizeChangeHandler}/>
            <label for="so-page-input" className="row-padding row-margin">Page Number</label>
            <input id="so-page-input" name="so-page-input" min="1" className="row-padding numeric-input" type="number" onChange={pageNumberChangeHandler}/>
        </div>
    );

}