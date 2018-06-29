import React from "react";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Header = props => (
    <nav className="navbar navbar-light bg-light" >
        <a className="navbar-brand" href="/">Buttered Popcorn</a>
        <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" name="search" value={props.search} onChange={props.handleInputChange} />
            <button className="btn btn-success my-2 my-sm-0" onClick={props.handleSubmit}> Search
                    </button>
        </form>
        <a className="navbar-text" href="/login">Log In</a>
        <a className="navbar-text" href="/register">Register</a>
    </nav>
)


export default Header;