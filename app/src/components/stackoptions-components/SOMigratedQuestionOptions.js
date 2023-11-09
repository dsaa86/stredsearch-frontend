import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SOMigratedQuestionOptions({soSearchData, setSoSearchData}){

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
        <>
            <label for="so-migrated-input">Migrated</label>
            <input type="checkbox" id="so-migrated-input" name="so-migrated-input" value="migrated" onChange={handleChangeMigratedQuestion}/>
        </>
    );

}