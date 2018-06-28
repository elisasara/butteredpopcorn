import React, { Component } from "react";
import API from "../utils/API";

class Home extends Component {
    state = {
        user: null,
        search: "",
        results: []
    }

    componentDidMount() {
        this.getUser();
    }

    getUser =( ) => {
        API.getUser()
        .then(res => {
            console.log("res:", res);
            this.setState(res.data);
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                {this.state.user ? (
                    <div>
                        <h1>Welcome to Buttered Popcorn, {this.state.user.firstName}!</h1>
                    </div>
                ) : (
                        <div>
                            <h1>Welcome to Buttered Popcorn!</h1>
                            <a href="/register"><h3>Create an Account</h3></a>
                            <a href="/login"><h3>Log In</h3></a>
                        </div>)
                }
            </div>
        )
    }
}

export default Home