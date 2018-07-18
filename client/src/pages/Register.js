import React, { Component } from "react";
import API from "../utils/API";

class Register extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (firstName, lastName, email, password) => {
        // event.preventDefault();
        const fullName = this.state.firstName + " " + this.state.lastName;
        console.log("fullname: ", fullName);
        if (this.state.firstName && this.state.lastName && this.state.email && this.state.password) {
            API.registerUser({
                firstName: firstName,
                lastName: lastName,
                fullName: fullName,
                email: email,
                password: password
            }).then(res => {
                this.context.history.push("/path");
            })
                .catch(err => console.log(err));
        }
        else {
            alert("Please fill out all fields");
        }
    };


    render() {
        return (
            <div>
                <h3 className="createAccount">Create an account</h3>
                <form className="forms" action="/register" method="post">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control registerForm" id="firstName" placeholder="First Name" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control registerForm" id="lastName" placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control registerForm" id="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control registerForm" id="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                    </div>
                    {/* <button className="btn btn-primary" onClick={() => this.handleSubmit(this.state.firstName, this.state.lastName, this.state.email, this.state.password)}>Create Account</button> */}
                    <button className="btn" style={{backgroundColor: "#ef8b8b"}} type="submit" onClick={this.handleSubmit}>Create Account</button>
                    <h4 className="createAccount">Already have an account? <a href="/login" style={{color: "#ef8b8b"}}>Log in here.</a></h4>
                </form>
            </div>
        );
    };
};

export default Register;