import React from 'react';
import './UserAdditionForm.css'


class UserAdditionForm extends React.Component {
    constructor(props){
        super(props);
        this.name = null;
        this.address = null;
        this.dob = null;
    }

    alldata = this.props.dataElement;

    closeForm() {
        document.getElementById("coverElement").style.display = "none";

    }

    onSubmitCloseForm = () => {
        document.getElementById("coverElement").style.display = "none";

    }

    nameInput = () => {
        this.name = document.getElementById("name").value;
        this.address = document.getElementById("address").value;
        this.dob = document.getElementById("dob").value;
    }

    render() {
        return (
            <div id="coverElement">
                <div id="myForm">
                    <button className="Reset" onClick={this.closeForm} type="button">X</button>
                    <form className="form-container">
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
                        <button type="button" className="Add" alldata={this.props.dataElement} onClick={this.props.onClick}>Add User</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default UserAdditionForm;


