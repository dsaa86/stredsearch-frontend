import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SONotTaggedOptions({soSearchData, setSoSearchData}){

    const [soNotTagged, setSoNotTagged] = useState("");

    const handleSoNotTaggedChange = (e) => {
        setSoNotTagged(e.target.value);
    }

    useEffect(() => {
        setSoSearchData({
            ...soSearchData,
            nottagged: soNotTagged
        });
    }, [soNotTagged]);

    return(
        <div className="row">
            <div className="col-sm-3">
                <label htmlFor="so-not-tagged-input">Question Not Tagged</label>
            </div>        
            <div className="col-sm">                
                <input type="text" id="so-not-tagged-input" name="so-not-tagged-input" className="col" onChange={handleSoNotTaggedChange}/>
            </div>
        </div>
    );

}