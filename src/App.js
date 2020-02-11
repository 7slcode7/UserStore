import React from 'react';
import NavBar from './Components/NavBar';
import './Components/NavBar.css';
import NameTag from './Components/NameTag';
import UserStoreButton from './Components/UserStoreButton'
import './App.css'
import UserAdditionForm from './Components/UserAdditionForm';



function App() {

  return (
    <div>
      <NavBar></NavBar>
      <div>
        <UserStoreButton name="Add User" elementName="coverElement"></UserStoreButton>
        <UserStoreButton name="Update User"></UserStoreButton>
        <UserStoreButton name="Delete User"></UserStoreButton>
      </div>
      <div className="NameTagHolder">Current Users
      </div>
        <NameTag name="Lahiru" fullName="Lahiu Chandima" dob="1994.11.07" address="No 23, Reid Avenue, Colombo 6"></NameTag>
        <NameTag name="Lahiru" fullName="Lahiu Chandima" dob="1994.11.07" address="No 23, Reid Avenue, Colombo 6"></NameTag>
        <UserAdditionForm></UserAdditionForm>
    </div>
  );
}

export default App;
