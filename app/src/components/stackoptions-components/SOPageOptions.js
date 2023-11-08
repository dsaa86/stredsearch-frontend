import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SOPageOptions({soRouteData}){

    return(
        <div>
            <label for="so-page-size-input" className="row-padding row-margin">Page Size</label>
            <input id="so-page-size-input" name="so-page-size-input" min="1" max="100" className="row-padding numeric-input" type="number"/>
            <label for="so-page-input" className="row-padding row-margin">Page Number</label>
            <input id="so-page-input" name="so-page-input" min="1" className="row-padding numeric-input" type="number"/>
        </div>
    );

}

