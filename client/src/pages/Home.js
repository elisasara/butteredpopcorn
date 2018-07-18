import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import Feed from "../components/Feed";

const Home = props => (
    <div>
        {props.user ? (
            <div>
                <h3 style={{padding: "25px"}}>Hello, {props.user.user.firstName}!</h3>
                <Feed />
            </div>
        ) : (
                <div className="text-center" id="home">
                    <h1 className="display-3">Welcome to<br />Buttered Popcorn!</h1>
                    <h3><Link to="/register" className="redLink">Register here</Link> to get started!</h3>
                    <h5>Already have an account? <Link to="/login" className="redLink">Login here</Link>.</h5>
                </div>
            )}

    </div>
)

export default Home;