import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SOBOdyOptions({soSearchData, setSoSearchData}){

    return(
        <div>
            <label for="so-body-input" className="row-margin row-padding">Body</label>
            <input type="text" id="so-body-input" name="so-body-input" className="row-margin row-padding"/>
        </div>
    );

}