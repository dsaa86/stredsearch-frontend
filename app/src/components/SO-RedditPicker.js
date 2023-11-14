import {useEffect, useState} from 'react';
import Axios from 'axios';
import '../SearchApp.css';

export default function SoRedditPicker({showSO, showReddit, soCheckHandler, redditCheckHandler}){
    return(
        <>
            <div className="col-2">
                <label for="so-checkbox">Stack Overflow</label>
            </div>
            <div className="col-1">
                <input type="checkbox" id="so-checkbox" name="so-checkbox" checked={showSO} onChange={soCheckHandler}/>
            </div>
            <div className="col-2">
                <label for="reddit-checkbox">Reddit</label>
            </div>
            <div className="col-1">
                <input type="checkbox" id="reddit-checkbox" name="reddit-checkbox" checked={showReddit} onChange={redditCheckHandler}/>
            </div>
        </>
    );
}