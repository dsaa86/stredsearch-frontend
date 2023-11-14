import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SOMigratedQuestionOptions({soFieldStatus, soSearchData, setSoSearchData}){

    const [migratedQuestion, setMigratedQuestion] = useState(false);

    const handleChangeMigratedQuestion = (e) => {
        setMigratedQuestion(e.target.checked);
    }

    useEffect(() => {
        if(migratedQuestion){
            setSoSearchData({
                ...soSearchData,
                migrated: true
            });
        } else {
            setSoSearchData({
                ...soSearchData,
                migrated: false
            });
        }
    }, [migratedQuestion]);

    return(
        <div className="col-sm">
            <div className="row">
                <div className="col-sm-3">
                    <label for="so-migrated-input" className="col">Migrated</label>
                </div>
                <div className="col-sm">
                    <input type="checkbox" id="so-migrated-input" name="so-migrated-input" value="migrated" className="col" onChange={handleChangeMigratedQuestion} disabled={!(soFieldStatus.migrated)}/>
                </div>
            </div>
        </div >
    );

}