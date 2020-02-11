import React from 'react';
import './UserAdditionForm.css'
import Data from './Data'


function closeForm() {
    document.getElementById("coverElement").style.display = "none";
}

function addData(){
    
    var name = document.getElementById("name").nodeValue;    
    var dob = document.getElementById("dob").nodeValue;  
    var address = document.getElementById("address").nodeValue;  

    var dataToInsert = { "name" : name , "dob" : dob , "address" : address};
    Data.push(dataToInsert);
    window.alert(Data);
}

function UserAdditionForm  () {
    return (
        <div id="coverElement">
            <div id="myForm">
                <button className="Reset" onClick={closeForm} type="button">X</button>
                <form action="" className="form-container">
                    <h1>User Details</h1>
                    <br></br>
                    <label><b>Name</b></label>
                    <input type="text" placeholder="Enter Full Name" id="name" required></input>
                    <br></br>
                    <label><b>Date of birth</b></label>
                    <input type="text" placeholder="Enter date of birth" id="dob" required></input>
                    <br></br>
                    <label><b>Address</b></label>
                    <input type="text" placeholder="Enter address" id="address" required></input>
                    <br></br> <br></br>
                    <button type="submit" className="Add" onClick={addData}>Add User</button>
                </form>
            </div>
        </div>
    );
}

// class UserAdditionForm extends React.Component{
//     componentDidUpdate(){
//         return<App></App>
//     }
//     render(){
//         return(
            
//         )
//     }
// }

export default UserAdditionForm;


