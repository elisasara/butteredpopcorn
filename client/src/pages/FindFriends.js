import React, { Component } from "react";
import dbAPI from "../utils/dbAPI";
import FriendList from "../components/FriendList";

class FindFriends extends Component {
    state = {
        friendEmail: "",
        friendName: "",
        results: []
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleEmailSearch = () => {
        // event.preventDefault();
        const friend = this.state.friendEmail;
        console.log("Friend Search: ", friend);
        dbAPI.getSearchedFriendbyEmail(friend)
            .then(res => {
                console.log("friend res: ", res.data);
                this.setState({
                    results: res.data
                });
            });
    };

    handleNameSearch = () => {
        // event.preventDefault();
        const friend = this.state.friendName;
        console.log("Friend Search: ", friend);
        dbAPI.getSearchedFriendbyName(friend)
            .then(res => {
                console.log("friend res: ", res.data);
                this.setState({
                    results: res.data
                });
            });
    };

    // findIfFriend = () => {
    //     const friendId = this.props.friendId;
    //     dbAPI.findIfFriend(friendId)
    //         .then(res => {
    //             if (res.length > 0) {
    //                 this.setState = {
    //                     friends: true
    //                 };
    //             }
    //             else {
    //                 return false;
    //             };
    //         });
    // };

    // followFriend = () => {
    //     dbAPI.followFriend(this.props.friendId)
    //     .then(res => {
    //         this.setState({
    //             friends: true
    //         });
    //         alert(`Friend added!`);
    //     });
    // };

    render() {
        return (
            <div>
                {this.props.user ? (
                    <div className="container">
                        {/* <form className="form-inline"> */}
                        <div className="form-group">
                            <label htmlFor="friendName">Search by Name</label>
                            <input type="text" className="form-control" name="friendName" value={this.state.friendName} id="friendName" onChange={this.handleInputChange} />
                            <button className="btn btn-primary" onClick={() => this.handleNameSearch(this.state.friendName)}>Search</button>
                        </div>
                        {/* </form> */}
                        {/* <form className="form-inline"> */}
                        <div className="form-group">
                            <label htmlFor="friendEmail">Search by Email:</label>
                            <input type="text" className="form-control" name="friendEmail" value={this.state.friendEmail} id="friendEmail" onChange={this.handleInputChange} />
                        </div>
                        <button className="btn btn-primary" onClick={() => this.handleEmailSearch(this.state.friendEmail)}>Search</button>
                        {/* </form> */}
                        <div>
                            <FriendList user={this.props.user} results={this.state.results} />
                            {/* {this.state.results.length ? (
                                this.state.results.map(friend =>
                                    <FriendList key={friend.id} name={friend.firstName} email={friend.email} joined={friend.createdAt} friendId={friend.id} />
                                )
                            ) : (
                                    <h1>Search for your friends here!</h1>
                                )} */}
                        </div>
                    </div>
                ) : (
                        <div>
                            <h3>You must be logged in to find your friends.</h3>
                            <h3><a href="/register">Create an account</a> or <a href="/login">login</a> now.</h3>
                        </div>
                    )}
            </div>
        )
    }
}

export default FindFriends;