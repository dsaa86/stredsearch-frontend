import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SONotTaggedOptions({soRouteData}){

    return(
        <div>
            <label htmlFor="so-not-tagged-input">Question Not Tagged</label>
            <input type="text" id="so-not-tagged-input" name="so-not-tagged-input"  className="row-padding row-margin"/>
        </div>
    );

}