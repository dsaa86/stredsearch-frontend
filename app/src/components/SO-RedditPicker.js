import {useEffect, useState} from 'react';
import Axios from 'axios';
import './SearchAppComponentsStyle.css';

export default function SoRedditPicker({showSO, showReddit, soCheckHandler, redditCheckHandler}){
    return(
        <div className="row">
            <div className="container so-reddit-picker">
                <div className="row">
                    <div className="col-4 col-md-3 col-lg-2">
                        <label for="so-checkbox">Stack Overflow</label>
                    </div>
                    <div className="col-8 col-md-9 col-lg-10">
                        <input type="checkbox" id="so-checkbox" name="so-checkbox" checked={showSO} onChange={soCheckHandler}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 col-md-3 col-lg-2">
                        <label for="reddit-checkbox">Reddit</label>
                    </div>
                    <div className="col-8 col-md-9 col-lg-10">
                        <input type="checkbox" id="reddit-checkbox" name="reddit-checkbox" checked={showReddit} onChange={redditCheckHandler}/>
                    </div>
                </div>
                    
            </div>
        </div>
    );
}