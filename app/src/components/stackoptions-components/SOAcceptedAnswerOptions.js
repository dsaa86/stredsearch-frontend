import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SOAcceptedAnswerOptions({soRouteData}){

    return(
        <>
            <label for="so-accepted-input">Accepted</label>
            <input type="checkbox" id="so-accepted-input" name="so-accepted-input" value="accepted"/>
        </>
    );

}