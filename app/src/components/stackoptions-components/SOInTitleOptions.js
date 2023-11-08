import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SOInTitleOptions({soRouteData}){

    return(
        <div>
            <label htmlFor="so-in-title-input">In Title</label>
            <input type="text" id="so-in-title-input" name="so-in-title-input" className="row-padding row-margin"/>
        </div>
    );

}