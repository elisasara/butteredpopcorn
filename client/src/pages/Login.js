import React, { Component } from "react";
import API from "../utils/API";
// import FacebookLogin from "react-facebook-login";

// const responseFacebook = (response) => {
//     console.log(response);
// }

// const checkAuth = {
//     isAuthenticated: false,
//     authenticate(cb) {
//         this.isAuthenticated = true;
//         setTimeout(cb, 100); // fake async
//     },
//     signout(cb) {
//         this.isAuthenticated = false;
//         setTimeout(cb, 100);
//     }
// };

class Login extends Component {
    state = {
        email: "",
        password: "",
        // redirectToReferrer: false
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.email && this.state.password) {
            API.loginUser({
                email: this.state.email,
                password: this.state.password
            }).then(res => {
                // console.log(res);
                this.props.history.push("/");
                // this.login();
            })
                .catch(err => console.log(err));
        };
    };

    // login = () => {
    //     checkAuth.authenticate(() => {
    //         this.setState({ redirectToReferrer: true });
    //     });
    // };

    // handleFacebook = () => {
    //     API.facebookLogin().then(res => {
    //         this.props.history.push("/")
    //     }).catch(err => console.log(err));
    // };


    render() {
        return (
            <div>
                <h3 className="login">Log In</h3>
                {/* <FacebookLogin
                    appId="1882216708738280"
                    autoLoad={true}
                    fields="name,email,picture"
                    // onClick={componentClicked}
                    callback={responseFacebook} /> */}
                <form action="/login" method="post" className="forms">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control loginForm" id="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control loginForm" id="password" name="password" placeholder="Password" value={this.state.value} onChange={this.handleInputChange} />
                    </div>
                    <button type="submit" className="btn" style={{ backgroundColor: "#ef8b8b" }} onClick={this.handleSubmit}>Login</button>
                    <h4 className="login">Don't have an account? <a href="/register" style={{ color: "#ef8b8b" }}>Create one here.</a></h4>
                </form>
                <div>
                </div>
            </div>
        )
    }
}

export default Login;