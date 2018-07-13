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

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.firstName && this.state.email && this.state.password) {
            API.registerUser({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password
            }).then(res => {
                // console.log(res);
                this.props.history.push("/");
            })
            .catch(err => console.log(err));
        };
    };


    render() {
        return (
            <div>
                <form action="/register" method="post">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" id="firstName" placeholder="First Name" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" id="lastName" placeholder="Last Name" name="lastName" value={this.state.firstName} onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.registerUser}>Create Account</button>
                </form>
                <div>
                    <h4>Already have an account? <a href="/login">Log in here.</a></h4>
                </div>
            </div>
        );
    };
};

export default Register;