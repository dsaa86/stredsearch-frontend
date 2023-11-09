import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SOTagsOptions({soSearchData, setSoSearchData}){

    return(
        <div>
            <label htmlFor="so-tag-input" className="row-padding row-margin">Question Tags</label>
            <input type="text" id="so-tag-input" name="so-tag-input" className="row-padding row-margin"/>
        </div>
    );

}