import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SOClosedQuestionOptions({soRouteData}){

    return(
        <>
        <label for="so-closed-input">Closed</label>
        <input type="checkbox" id="so-closed-input" name="so-closed-input" value="closed"/>
        </>
    );

}