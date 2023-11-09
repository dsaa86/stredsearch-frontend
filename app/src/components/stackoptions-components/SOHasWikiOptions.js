import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SOHasWikiOptions({soSearchData, setSoSearchData}){

    return(
        <>
            <label for="so-wiki-input">Wiki</label>
            <input type="checkbox" id="so-wiki-input" name="so-wiki-input" value="wiki"/>
        </>
    );

}