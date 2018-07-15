import React from "react";
import {Link} from "react-router-dom";

const Home = () => (
    <div className="text-center" id="home">
        <h1 className="display-3">Welcome to<br />Buttered Popcorn!</h1>
        <h3><Link to="/register" style={{color: "#ef8b8b"}}>Register here</Link> to get started!</h3>
        <h5>Already have an account? <Link to="/login" style={{color: "#ef8b8b"}}>Login here</Link>.</h5>
    </div>
)

export default Home;