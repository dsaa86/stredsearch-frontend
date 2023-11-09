import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SONotTaggedOptions({soSearchData, setSoSearchData}){

    const [soNotTagged, setSoNotTagged] = useState(false);

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
        <div>
            <label htmlFor="so-not-tagged-input">Question Not Tagged</label>
            <input type="text" id="so-not-tagged-input" name="so-not-tagged-input"  className="row-padding row-margin" onChange={handleSoNotTaggedChange}/>
        </div>
    );

}