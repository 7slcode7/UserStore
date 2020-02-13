import React from 'react';
import NavBar from './Components/NavBar';
import NameTag from './Components/NameTag';
import UserStoreButton from './Components/UserStoreButton'
import UserAdditionForm from './Components/UserAdditionForm';
import Data from './Components/Data';

import './App.css'
import './Components/NavBar.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      edited: false,
      mainData: Data
  }
}

componentDidMount(){
  
}

  render() {
    return (
      
      <div>
        <NavBar></NavBar>
        <div>
        {console.log("Before passing :" +JSON.stringify(this.state.mainData))}
          <UserStoreButton name="Add User" elementName="coverElement"></UserStoreButton>
          <UserStoreButton name="Update User"></UserStoreButton>
          <UserStoreButton name="Delete User"></UserStoreButton>
        </div>
        <div className="NameTagHolder">Current Users
          </div>
        <div>
          {
            this.state.mainData.users.map((userData, index) =>
              <NameTag
                key={index}
                fullName={userData.name}
                dob={userData.dob}
                address={userData.address}
              ></NameTag>
            )
          }
        </div>
        <p>
          {JSON.stringify(this.state.mainData)}
        </p>
        <UserAdditionForm dataElement={this.state.mainData}></UserAdditionForm>
      </div>
    );
  }

}

// function App() {



// }

export default App;
