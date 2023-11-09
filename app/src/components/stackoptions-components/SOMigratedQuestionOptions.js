import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SOMigratedQuestionOptions({soRouteData}){

    return(
        <>
            <label for="so-migrated-input">Migrated</label>
            <input type="checkbox" id="so-migrated-input" name="so-migrated-input" value="migrated"/>
        </>
    );

}