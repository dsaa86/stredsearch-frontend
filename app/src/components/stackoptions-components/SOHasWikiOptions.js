import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SOHasWikiOptions({soSearchData, setSoSearchData}){

    const [wiki, setWiki] = useState(false);

    const handleChangeWikiOption = (e) => {
        setWiki(e.target.checked);
    }

    useEffect(() => {
        if(wiki){
            setSoSearchData({
                ...soSearchData,
                wiki: true
            });
        } else {
            setSoSearchData({
                ...soSearchData,
                wiki: false
            });
        }
    }, [wiki]);

    return(
        <>
            <label for="so-wiki-input">Wiki</label>
            <input type="checkbox" id="so-wiki-input" name="so-wiki-input" value="wiki" onChange={handleChangeWikiOption}/>
        </>
    );

}