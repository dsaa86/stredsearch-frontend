import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

export default function SOUserOptions({soFieldStatus, soSearchData, setSoSearchData}){

    const [user, setUser] = useState("");

    const handleChangeUser = (event) => {
        setUser(event.target.value);
    }

    useEffect(() => {
        setSoSearchData({...soSearchData, user: user});
    }, [user]);

    return(
        <div className="row">
            <div className="col-sm-3 col-12">
                <label htmlFor="so-user-input" className="">User</label>
            </div>
            <div className="col-sm-9 col-12">
                <input type="text" id="so-user-input" name="so-user-input" className="col" onChange={handleChangeUser} disabled={!(soFieldStatus.user)} />
            </div>
        </div>
    );

}