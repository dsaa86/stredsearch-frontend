import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SOUserOptions({soRouteData}){

    return(
        <div>
            <label htmlFor="so-user-input" className="row-padding row-margin">User</label>
            <input type="text" id="so-user-input" name="so-user-input" className="row-margin row-padding"/>
        </div>
    );

}