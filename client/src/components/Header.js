import React, { Component } from "react";
// import movieAPI from "../utils/movieAPI";

// all of this logic will eventually need to be moved into app.js
// these methods will be passed down as props into the header component
// the results will be passed down into other components which will render the results to the page

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
//         const search = encodeURI(this.state.search);
//         console.log(search);
//         movieAPI.searchFor(search)
//         .then(res => this.setState({
//             results: res.data
//         }))
//         .catch(err => console.log(err));
//         (console.log(this.state));
//     };

//     render() {
//         return (
//             <nav className="navbar navbar-light bg-light" >
//                 <a className="navbar-brand" href="/">Buttered Popcorn</a>
//                 <form className="form-inline">
//                     <input className="form-control mr-sm-2" type="search" placeholder="Search" name="search" value={this.state.value} onChange={this.handleInputChange} />
//                     <button className="btn btn-success my-2 my-sm-0" onClick={this.handleSubmit}> Search
//                     </button>
//                 </form>
//                 <a className="navbar-text" href="#">Log In/Register</a>
//             </nav>
//         )
//     };
// };

const Header = props => (
    <nav className="navbar navbar-light bg-light" >
        <a className="navbar-brand" href="/">Buttered Popcorn</a>
        <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" name="search" value={props.search} onChange={props.handleInputChange} />
            <a href="/search"><button className="btn btn-success my-2 my-sm-0" onClick={props.handleSubmit}> Search
                    </button></a>
        </form>
        <a className="navbar-text" href="#">Log In/Register</a>
    </nav>
)


export default Header;