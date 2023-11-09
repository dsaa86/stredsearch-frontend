import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SOUserOptions({soSearchData, setSoSearchData}){

    const [user, setUser] = useState("");

    const handleChangeUser = (event) => {
        setUser(event.target.value);
    }

    useEffect(() => {
        setSoSearchData({...soSearchData, user: user});
    }, [user]);

    return(
        <div>
            <label htmlFor="so-user-input" className="row-padding row-margin">User</label>
            <input type="text" id="so-user-input" name="so-user-input" className="row-margin row-padding" onChange={handleChangeUser}/>
        </div>
    );

}