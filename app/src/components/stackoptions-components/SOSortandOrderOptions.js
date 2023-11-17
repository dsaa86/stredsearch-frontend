import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SOSortandOrderOptions({soFieldStatus, soSearchData, setSoSearchData}){

    const [sortOptions, setSortOptions] = useState([]);
    const [orderOptions, setOrderOptions] = useState([]);

    const handleChangeSort = (event) => {
        setSortOptions(event.target.value);
    };

    const handleChangeOrder = (event) => {
        setOrderOptions(event.target.value);
    };

    useEffect(() => {
        setSoSearchData({...soSearchData, resultsSort: sortOptions, order: orderOptions});
    }, [sortOptions, orderOptions]);

    return(
        <div className="row">
            <div id="sort-label-and-select" className="col-sm-6 col-12">
                <div className="row">
                    <div id="sort-label" className="col-sm-6 col-12">
                        <label for="sort-options" className="">Sort By</label>
                    </div>
                    <div id="sort-select" className="col-sm-6 col-12">
                        <select id="sort-options" className="col" value={sortOptions} onChange={handleChangeSort} disabled={!(soFieldStatus.resultsSort)}>
                            <option value="activity">Activity</option>
                            <option value="votes">Votes</option>
                            <option value="creation">Creation</option>
                            <option value="hot">Hot</option>
                            <option value="week">Week</option>
                            <option value="month">Month</option>
                        </select>
                    </div>
                </div>
            </div>
            <div id="order-label-and-select" className="col-sm-6 col-12">
                <div className="row">
                    <div id="order-label" className="col-sm-6 col-12">
                        <label for="order-options" className="">Order By</label>
                    </div>
                    <div id="order-select" className="col-sm-6 col-12">
                        <select id="order-options" className="col" value={orderOptions} onChange={handleChangeOrder} disabled={!(soFieldStatus.order)}>
                        <option value="desc">Descending</option>
                        <option value="asc">Ascending</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );

}