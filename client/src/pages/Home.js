import React, { Component } from "react";
import API from "../utils/API";
import Header from "../components/Header";
import DisplayResults from "../components/DisplayResults";
import Results from "../components/Results";
import movieAPI from "../utils/movieAPI";

// class Home extends Component {
//     state = {
//         user: null
//     }

//     componentDidMount() {
//         this.getUser();
//     }

//     getUser =( ) => {
//         API.getUser()
//         .then(res => {
//             console.log("res:", res);
//             this.setState(res);
//         })
//         .catch(err => console.log(err));
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.user ? (
//                     <div>
//                         <h1>Welcome to Buttered Popcorn, {this.state.user.firstName}!</h1>
//                     </div>
//                 ) : (
//                         <div>
//                             <h1>Welcome to Buttered Popcorn!</h1>
//                             <a href="/register"><h3>Create an Account</h3></a>
//                             <a href="/login"><h3>Log In</h3></a>
//                         </div>)
//                 }
//             </div>
//         )
//     }
// }

// export default Home

class Home extends Component {
    state = {
        user: null,
        search: "",
        results: []
    }

    componentDidMount() {
        this.getUser();
    }

    getUser = () => {
        API.getUser()
            .then(res => {
                console.log("res:", res);
                this.setState({
                    user: res
                });
            })
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        const search = this.state.search;
        console.log(search);
        movieAPI.searchFor(search)
            .then(res => {
                this.setState({
                    results: res.data
                })
                // console.log(this.state.results);
            })
            .catch(err => console.log(err));
    };

    // YOU MIGHT NEED TO SEPARATE THIS INTO TWO COMPONENTS
    render() {
        if (this.state.results.length) {
            return (
                <div>
                    <Header
                        search={this.state.search}
                        handleInputChange={this.handleInputChange}
                        handleSubmit={this.handleSubmit} />
                    <DisplayResults>
                        {this.state.results.map(title => (
                            <Results
                                // userId={this.state.user.firstName}
                                key={title.id}
                                id={title.id}
                                showTitle={title.name}
                                movieTitle={title.title}
                                media={title.media_type}
                                overview={title.overview}
                                searchTitle={this.searchTitle}
                            />
                        ))}
                    </DisplayResults>
                </div>
            )
        }
        // else if (this.state.user) {
        else {
            return (
                <div>
                    <Header
                        search={this.state.search}
                        handleInputChange={this.handleInputChange}
                        handleSubmit={this.handleSubmit} />
                    {this.state.user ? (<h1>Welcome to Buttered Popcorn, {this.state.user.data.user.firstName}!</h1>
                    ) : (<h1>Welcome to Buttered Popcorn!</h1>)}
                </div>
            )
        }

        // else {
        //     return (
        //         <div>
        //             <Header
        //                 search={this.state.search}
        //                 handleInputChange={this.handleInputChange}
        //                 handleSubmit={this.handleSubmit} />
        //             <h1>Welcome to Buttered Popcorn!</h1>
        //         </div>
        //     )
        // }

        // return (
        //     <div>
        //         <Header
        //             search={this.state.search}
        //             handleInputChange={this.handleInputChange}
        //             handleSubmit={this.handleSubmit} />
        //         {this.state.user ? (
        //             <div>
        //                 <h1>Welcome to Buttered Popcorn... </h1>
        //                 {/* <h1>Welcome to Buttered Popcorn, {this.state.user.data.user.firstName}!</h1> */}
        //             </div>
        //         ) : (
        //                 <div>
        //                     <h1>Welcome to Buttered Popcorn!</h1>
        //                     <a href="/register"><h3>Create an Account</h3></a>
        //                     <a href="/login"><h3>Log In</h3></a>
        //                 </div>)
        //         }
        //     </div>
        // )
    }
}


export default Home;
