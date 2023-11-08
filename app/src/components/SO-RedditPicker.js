import {useEffect, useState} from 'react';
import Axios from 'axios';
import '../SearchApp.css';

export default function SoRedditPicker({showSO, showReddit, soCheckHandler, redditCheckHandler}){
    return(
        <div className="so-reddit-picker-container">
            <input type="checkbox" id="so-checkbox" name="so-checkbox" checked={showSO} onChange={soCheckHandler}/>
            <label for="so-checkbox">Stack Overflow</label>
            <input type="checkbox" id="reddit-checkbox" name="reddit-checkbox" checked={showReddit} onChange={redditCheckHandler}/>
            <label for="reddit-checkbox">Reddit</label>
        </div>
    );
}