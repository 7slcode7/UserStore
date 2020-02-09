import React from 'react';
import UserAdditionForm    from './UserAdditionForm.js';

import './UserStoreButton.css'


const UserStoreButton = (props) => {

    function displayUserAddition(name) {
        if (name === "Add User") {
            window.alert("Test");
            return <UserAdditionForm></UserAdditionForm>
        }
    }

    return (
        <div>
            <button className="UserStoreButton" onClick={()=>displayUserAddition(props.name)}>
            {props.name}
            </button> 
        </div>
    );
    
};

export default UserStoreButton; 