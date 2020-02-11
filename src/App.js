import React from 'react';
import NavBar from './Components/NavBar';
import NameTag from './Components/NameTag';
import UserStoreButton from './Components/UserStoreButton'
import UserAdditionForm from './Components/UserAdditionForm';
import Data from './Components/Data'

import './App.css'
import './Components/NavBar.css';

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
        <div>
        {
          Data.map((userData, index) => 
            <NameTag
              fullName={userData.name}
              dob={userData.dob}
              address={userData.address}
            ></NameTag>
          )
        }
        </div>
        <UserAdditionForm></UserAdditionForm>
    </div>
  );
}

export default App;
