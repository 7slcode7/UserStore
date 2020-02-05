import React from 'react';
import './UserStoreButton.css'

const UserStoreButton = (props) => (
    <div>
        <button className="UserStoreButton">{props.name}</button> 
    </div>
);

export default UserStoreButton; 