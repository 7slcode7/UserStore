import React from 'react';
import NavBar from './Components/NavBar';
import NameTag from './Components/NameTag';
import UserStoreButton from './Components/UserStoreButton'
import UserAdditionForm from './Components/UserAdditionForm';

import './App.css'
import './Components/NavBar.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainData: {
        "users": [{
          "name": "Lahiu Chandima",
          "dob": "10/11/2020",
          "address": "No 2, Kings Road, Galle"
        },
        {
          "name": "Pathum Sampath",
          "dob": "10/11/2020",
          "address": "No 23, Reid Avenue, Colombo 6"
        }
        ]
      }
    }
  }

  addData() {
    var feed = { "name": "Pathum Sampath", "dob": "10/11/2020", "address": "No 23, Reid Avenue, Colombo 6>>>>>>>" };
    var copyData = this.state.mainData;
    copyData.users.push(feed);
    this.setState({
      mainData: copyData,
    }
    )
    // window.alert("After pushing:" + JSON.stringify(this.state.mainData));
  }

  displayNameTags() {
    // window.alert("Display NameTag function : " + JSON.stringify(this.state.mainData));
    return (
      this.state.mainData.users.map((userData, index) =>
        <NameTag
          key={index}
          fullName={userData.name}
          dob={userData.dob}
          address={userData.address}
        ></NameTag>
      )
    )
  }



  render() {
    return (

      <div>
        <NavBar></NavBar>
        <div>
          {console.log("Before passing :" + JSON.stringify(this.state.mainData))}
          <UserStoreButton name="Add User" elementName="coverElement"></UserStoreButton>
          <UserStoreButton name="Update User"></UserStoreButton>
          <UserStoreButton name="Delete User"></UserStoreButton>
        </div>
        <div className="NameTagHolder">Current Users
          </div>
        <div>
          {this.displayNameTags()}
        </div>
        <UserAdditionForm dataElement={this.state.mainData} onClick={() => this.addData()} style={{display:"none"}}></UserAdditionForm>
      </div>
    );
  }

}

export default App;
