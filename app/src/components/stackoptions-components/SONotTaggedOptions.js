import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SONotTaggedOptions({soFieldStatus, soSearchData, setSoSearchData}){

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
            <div className="col-sm-3 col-12">
                <label htmlFor="so-not-tagged-input">Question Not Tagged</label>
            </div>        
            <div className="col-sm-9 col-12">                
                <input type="text" id="so-not-tagged-input" name="so-not-tagged-input" className="col" onChange={handleSoNotTaggedChange} disabled={!(soFieldStatus.nottagged)}/>
            </div>
        </div>
    );

}