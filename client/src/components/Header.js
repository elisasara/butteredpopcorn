import React from "react";
import { Link } from "react-router-dom";
// import API from "../utils/API";

// class Header extends Component {

//     logoutUser = () => {
//         API.logoutUser()
//         .then(res => {
//             this.setState({
//                 user: null
//             });  
//             console.log("User logged out")});
//     };

//     render() {
//         return (
//             <nav className="navbar navbar-light bg-light" >
//                 <a className="navbar-brand" href="/">Buttered Popcorn</a>
//                 <form className="form-inline">
//                     <input className="form-control mr-sm-2" type="search" placeholder="Search" name="search" value={this.props.search} onChange={this.props.handleInputChange} />
//                     <Link to={"/search/" + this.props.search}>
//                         {/* <button className="btn btn-success my-2 my-sm-0" onClick={props.handleSubmit}> Search */}
//                         <button className="btn btn-success my-2 my-sm-0"> Search
//                                 </button>
//                     </Link>
//                 </form>
//                 {this.props.user ? (
//                     <span>
//                         <Link to="/profile"><span className="navbar-text">Welcome {this.props.user.user.firstName}</span></Link>
//                         <span className="navbar-text"><button className="btn" type="submit" onClick={this.logoutUser}>Log Out</button></span>
//                     </span>
//                 ) : (<span className="navbar-text"><a href="/login">Log In</a>/
//                         <a href="/register">Register</a></span>)}
//             </nav>
//         )
//     }
// }

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
            <span>
                <Link to="/profile"><span className="navbar-text">Welcome {props.user.user.firstName}</span></Link>
                <span className="navbar-text"><button className="btn" type="submit" onClick={props.logout}>Log Out</button></span>
            </span>
        ) : (<span className="navbar-text"><a href="/login">Log In</a>/
            <a href="/register">Register</a></span>)}
    </nav>
)


export default Header;