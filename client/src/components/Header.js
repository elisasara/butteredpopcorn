import React from "react";
import { Link } from "react-router-dom";

const Header = props => (
    <div id="headerContainer">
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#ef8b8b"}} >
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <form className="form-inline order-1">
                <input className="form-control mr-auto ml-auto" type="search" placeholder="Search" name="search" value={props.search} onChange={props.handleInputChange} />
                <Link to={"/search/" + props.search}>
                    <button className="btn btn-dark ml-sm-2 my-2 my-sm-0"> Search
                    </button>
                </Link>
            </form>
            <div className="collapse navbar-collapse mainNav order-0">
                <a className="navbar-brand" href="/">Buttered Popcorn</a>
            </div>
            {props.user ? (
                <div className="collapse navbar-collapse mainNav order-2">
                    <ul className="navbar-nav ml-auto p2">
                        <li className="nav-item ml-1 mr-1">
                            <Link to="/profile">Welcome {props.user.user.firstName}</Link>
                        </li>
                        <li className="nav-item ml-1 mr-1">
                            <Link to="/findfriends">Find Friends</Link>
                        </li>
                        <li className="nav-item ml-1 mr-1">
                            <Link to="/newsfeed">News Feed</Link>
                        </li>
                        <li className="navbar-item mr-1 ml-1" onClick={props.logout}><a href="/">Log Out</a></li>
                        {/* <span className="navbar-text"><button className="btn" type="submit" onClick={props.logout}>Log Out</button></span> */}
                    </ul>
                </div>
            ) : (
                    <div className="collapse navbar-collapse mainNav order-2">
                        <ul className="navbar-nav ml-auto p2">
                            <li className="nav-item">
                                <Link to="/login">Log In</Link>/<Link to="/register">Register</Link>
                            </li>
                        </ul>
                    </div>)}
        </nav >
    </div>
)


export default Header;