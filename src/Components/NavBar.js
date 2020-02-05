import './NavBar.css';
import React from 'react';

const  NavBar = (props) => (
    <div className="topnav">
        <a className="active" href="#home">Home</a>
        <a href="#developerDetails">Developer Details</a>
        <a href="#more">More Projects</a>
    </div>
);

export default NavBar;