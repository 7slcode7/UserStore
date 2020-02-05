import React from 'react';
import NavBar from './Components/NavBar';
import './Components/NavBar.css';
import NameTag from './Components/NameTag';
import UserStoreButton from './Components/UserStoreButton'

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <div>
        <UserStoreButton name="Add User"></UserStoreButton>
        <UserStoreButton name="Update User"></UserStoreButton>
        <UserStoreButton name="Delete User"></UserStoreButton>
      </div>
      <div className="NameTagHolder">AAA
        <NameTag name="Lahiru" fullName="Lahiu Chandima" dob="1994.11.07" address="No 23, Reid Avenue, Colombo 6"></NameTag>
        <NameTag name="Lahiru" fullName="Lahiu Chandima" dob="1994.11.07" address="No 23, Reid Avenue, Colombo 6"></NameTag>
      </div>
    </div>
  );
}

export default App;
