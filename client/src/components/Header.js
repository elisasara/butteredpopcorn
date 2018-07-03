import React from "react";
import { Link } from "react-router-dom";


const Header = props => (
    <nav className="navbar navbar-light bg-light" >
        <a className="navbar-brand" href="/">Buttered Popcorn</a>
        <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" name="search" value={props.search} onChange={props.handleInputChange} />
            <Link to={"/search/" + props.search}>
                {/* <button className="btn btn-success my-2 my-sm-0" onClick={props.handleSubmit}> Search */}
                <button className="btn btn-success my-2 my-sm-0"> Search
                    </button>
            </Link>
        </form>
        {props.user ? (
            <Link to="/profile"><span className="navbar-text">Welcome {props.user.user.firstName}</span></Link>
        ) : (<span className="navbar-text"><a href="/login">Log In</a>/ 
            <a href="/register">Register</a></span>)}
    </nav>
)


export default Header;