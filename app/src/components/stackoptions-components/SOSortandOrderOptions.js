import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SOSortandOrderOptions({soSearchData, setSoSearchData}){

    const [sortOptions, setSortOptions] = useState([]);
    const [orderOptions, setOrderOptions] = useState([]);

    const handleChangeSort = (event) => {
        setSortOptions(event.target.value);
    };

    const handleChangeOrder = (event) => {
        setOrderOptions(event.target.value);
    };

    useEffect(() => {
        setSoSearchData({...soSearchData, sort: sortOptions, order: orderOptions});
    }, [sortOptions, orderOptions]);

    return(
        <div>
            <label for="sort-options" className="row-padding row-margin">Sort By</label>
            <select id="sort-options" className="row-padding row-margin" value={sortOptions} onChange={handleChangeSort}>
                <option value="activity">Activity</option>
                <option value="votes">Votes</option>
                <option value="creation">Creation</option>
                <option value="hot">Hot</option>
                <option value="week">Week</option>
                <option value="month">Month</option>
            </select>
            <label for="order-options" className="row-padding row-margin">Order By</label>
            <select id="order-options" className="row-padding row-margin" value={orderOptions} onChange={handleChangeOrder}>
                <option value="desc">Descending</option>
                <option value="asc">Ascending</option>
            </select>
        </div>
    );

}