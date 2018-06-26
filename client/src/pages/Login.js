import React from "react";

const Login = () => (
    <div>
        <form>
            <div className="form-group">
                <label for="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Email" />
            </div>
            <div className="form-group">
                <label for="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <div>
            <h4>Don't have an account? <a href="/register">Create one here.</a></h4>
        </div>
    </div>
);

export default Login;