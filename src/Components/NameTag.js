import React from 'react';
import './NameTag.css'

const NameTag = (props) => (
    <div className="NameTagContainer">
        <h1>User : {props.name}</h1><hr></hr>
        <div className="detailContainer">
            <span>Full Name : </span> <span>{props.fullName}</span> <br></br>
            <span>Date of Birth : </span> <span>{props.dob}</span> <br></br>
            <span>Address : </span> <span>{props.address}</span>
        </div>
    </div>
);

export default NameTag;