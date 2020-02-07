import React from 'react';
import './UserAdditionForm.css'


const UserAdditionForm = () => {

    return (
        <div id="coverElement">
            <div id="myForm">
                <form action="" className="form-container">
                    <h1>User Details</h1>
                    <br></br>
                    <label><b>Name</b></label>
                    <input type="text" placeholder="Enter Full Name" name="name" required></input>
                    <br></br>
                    <label><b>Date of birth</b></label>
                    <input type="text" placeholder="Enter date of birth" name="dob" required></input>
                    <br></br>
                    <label><b>Address</b></label>
                    <input type="text" placeholder="Enter address" name="address" required></input>
                    <br></br> <br></br> 
                    <button type="submit" className="Add">Add User</button><span> </span>
                    <button className="Reset" onclick="closeForm()">Close Form</button>
                </form>
            </div>
        </div>
    );
}

export default UserAdditionForm;