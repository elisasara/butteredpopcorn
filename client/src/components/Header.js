import React from "react";
// import React, { Component } from "react";
// import movieAPI from "../utils/movieAPI";
// import DisplayResults from "./DisplayResults";
// import Results from "./Results";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// class Header extends Component {
//     state = {
//         search: "",
//         results: []
//     }

//     handleInputChange = event => {
//         const { name, value } = event.target;
//         this.setState({
//             [name]: value
//         });
//     };

//     handleSubmit = event => {
//         event.preventDefault();
//         const search = this.state.search;
//         console.log(search);
//         movieAPI.searchFor(search)
//             .then(res => {
//                 this.setState({
//                     results: res.data
//                 })
//                 // console.log(this.state.results);
//             })
//             .catch(err => console.log(err));
//     };

//     render() {
//         return (
//             <nav className="navbar navbar-light bg-light" >
//                 <a className="navbar-brand" href="/">Buttered Popcorn</a>
//                 <form className="form-inline">
//                     <input className="form-control mr-sm-2" type="search" placeholder="Search" name="search" value={this.search} onChange={this.handleInputChange} />
//                     <a href="/search"><button className="btn btn-success my-2 my-sm-0" onClick={this.handleSubmit}> Search
//                         </button></a>
//                 </form>
//                 <span className="navbar-text">
//                     <a href="/login">Log In</a>
//                      / 
//                     <a href="/register">Register</a>
//                 </span>
//             </nav>
//         )
//     }
// };

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