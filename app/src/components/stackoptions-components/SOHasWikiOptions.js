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
        <div className="col-sm">
            <div className="row">
                <div className="col-sm-3">
                    <label for="so-wiki-input" className="col">Wiki</label>
                </div>
                <div className="col-sm">
                    <input type="checkbox" id="so-wiki-input" name="so-wiki-input" value="wiki" className="col" onChange={handleChangeWikiOption}/>
                </div>
            </div>
        </div>
    );

}