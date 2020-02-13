import React from 'react';
import './UserAdditionForm.css'


class UserAdditionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            edited: false
        }
    }

    alldata = this.props.dataElement;

    addData(data) {
        window.alert(JSON.stringify(data));
        // var name = document.getElementById("name").value;
        // var dob = document.getElementById("dob").value;
        // var address = document.getElementById("address").value;
        // window.alert("SSS");
        // var dataToInsert = '{ "name": "Pathum Sampath" , "dob": "10/11/2020" , "address": "No 23, Reid Avenue, Colombo 6"}';
        // window.alert("DDD");
        //  dataToInsert =  JSON.parse(dataToInsert);
        //  window.alert("SSFFS");
       
        var feed = {"name": "Pathum Sampath","dob": "10/11/2020","address": "No 23, Reid Avenue, Colombo 6>>>>>>>"};
        this.props.dataElement.users.push(feed);
        // data.users.push(feed);
        window.alert("After pushing:" + JSON.stringify(data) );

        // console.log(data);
        // window.alert("XXXX");
        // window.alert(JSON.stringify(data));
    }

    closeForm() {
        document.getElementById("coverElement").style.display = "none";

    }



    render() {
        return (
            <div id="coverElement">
                <div id="myForm">
                    <button className="Reset" onClick={this.closeForm} type="button">X</button>
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
                        <button type="submit" className="Add" alldata={this.props.dataElement} onClick={() => this.addData(this.alldata)}>Add User</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default UserAdditionForm;


