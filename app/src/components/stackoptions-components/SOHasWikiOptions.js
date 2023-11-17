import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SOHasWikiOptions({soFieldStatus, soSearchData, setSoSearchData}){

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
        <div className="col-12 col-sm-12 col-md-6">
            <div className="row">
                <div className="col-2">
                    <label for="so-wiki-input" className="col">Wiki</label>
                </div>
                <div className="col-10">
                    <input type="checkbox" id="so-wiki-input" name="so-wiki-input" value="wiki" className="col" onChange={handleChangeWikiOption} disabled={!(soFieldStatus.wiki)}/>
                </div>
            </div>
        </div>
    );

}