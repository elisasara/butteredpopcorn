import React from "react";

const Header = () => (
<nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="#">Buttered Popcorn</a>
    <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" />
        <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <a className="navbar-text" href="#">Log In/Register</a>
</nav>
);

export default Header;