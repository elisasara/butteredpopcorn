import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import Feed from "../components/Feed";


// class Home extends Component {
//     state = {
//         user: null
//     }

//     componentDidMount() {
//         this.getUser();
//     }

//     getUser = () => {
//         API.getUser()
//             .then(res => {
//                 console.log("res:", res);
//                 this.setState({
//                     user: res.data
//                 });
//             })
//             .catch(err => console.log(err));
//     }

//     render() {
//         return (
//             <div>
//                 {props.user ? (
//                     <div>
//                         <h3>Hello, {props.user.user.firstName}!</h3>
//                         <Feed />
//                     </div>
//                 ) : (
//                         <div className="text-center" id="home">
//                             <h1 className="display-3">Welcome to<br />Buttered Popcorn!</h1>
//                             <h3><Link to="/register" style={{ color: "#ef8b8b" }}>Register here</Link> to get started!</h3>
//                             <h5>Already have an account? <Link to="/login" style={{ color: "#ef8b8b" }}>Login here</Link>.</h5>
//                         </div>
//                     )}

//             </div>
//         )
//     }
// }
const Home = props => (
    <div>
        {props.user ? (
            <div>
                <h3>Hello, {props.user.user.firstName}!</h3>
                <Feed />
            </div>
        ) : (
                <div className="text-center" id="home">
                    <h1 className="display-3">Welcome to<br />Buttered Popcorn!</h1>
                    <h3><Link to="/register" style={{ color: "#ef8b8b" }}>Register here</Link> to get started!</h3>
                    <h5>Already have an account? <Link to="/login" style={{ color: "#ef8b8b" }}>Login here</Link>.</h5>
                </div>
            )}

    </div>
)

export default Home;