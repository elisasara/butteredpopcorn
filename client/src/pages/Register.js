import React from "react";

const Register = () => (
    <div>
        <form>
            <div className="form-group">
                <label for="firstName">First Name</label>
                <input type="text" className="form-control" id="firstName" placeholder="First Name" />
            </div>
            <div className="form-group">
                <label for="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Email" />
            </div>
            <div className="form-group">
                <label for="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Create Account</button>
        </form>
        <div>
            <h4>Already have an account? <a href="/login">Log in here.</a></h4>
        </div>
    </div>
);

export default Register;