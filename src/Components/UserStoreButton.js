import React from 'react';

import './UserStoreButton.css'

function displayUserAddition(name , elementName) {
    if (name === "Add User") {
        document.getElementById(elementName).style.display = "block";
    }
}

const UserStoreButton = (props) => {
    return (
        <div>
            <button className="UserStoreButton" onClick={()=>displayUserAddition(props.name , props.elementName)}>
            {props.name}
            </button> 
        </div>
    );
    
};

export default UserStoreButton; 