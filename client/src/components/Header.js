import React from "react";
import { Link } from "react-router-dom";

const Header = props => (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light" >
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mainNav">
            <a className="navbar-brand" href="/">Buttered Popcorn</a>
        </div>
        <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" name="search" value={props.search} onChange={props.handleInputChange} />
            <Link to={"/search/" + props.search}>
                <button className="btn btn-success my-2 my-sm-0"> Search
                    </button>
            </Link>
        </form>
        {props.user ? (
            <div className="collapse navbar-collapse mainNav">
                <ul className="navbar-nav ml-auto p-2">
                    <li className="nav-item ml-2 mr-2">
                        {/* <Link to="/profile"><span className="navbar-text">Welcome {props.user.user.firstName}</span></Link> */}
                        <Link to="/profile">Welcome {props.user.user.firstName}</Link>
                    </li>
                    <li className="nav-item ml-2 mr-2">
                        <Link to="/findfriends">Find Friends</Link>
                    </li>
                    <li className="navbar-item mr-2 ml-2" onClick={props.logout}><a href="/">Log Out</a></li>
                    {/* <span className="navbar-text"><button className="btn" type="submit" onClick={props.logout}>Log Out</button></span> */}
                </ul>
            </div>
        ) : (
                <div className="collapse navbar-collapse mainNav">
                    <ul className="navbar-nav mr-2 ml-2">
                        <li className="nav-item">
                            <Link to="/login">Log In</Link>/<Link to="/register">Register</Link>
                        </li>
                    </ul>
                </div>)}
    </nav>
)


export default Header;