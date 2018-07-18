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
                        <div className="form-group forms">
                            <label htmlFor="friendName">Search by Name</label>
                            <input type="text" className="form-control findFriendForm" name="friendName" value={this.state.friendName} id="friendName" onChange={this.handleInputChange} />
                            <button className="btn" style={{ backgroundColor: "#ef8b8b" }} onClick={() => this.handleNameSearch(this.state.friendName)}>Search</button>
                        </div>
                        <div className="form-group forms">
                            <label htmlFor="friendEmail">Search by Email:</label>
                            <input type="text" className="form-control findFriendForm" name="friendEmail" value={this.state.friendEmail} id="friendEmail" onChange={this.handleInputChange} />
                            <button className="btn" style={{ backgroundColor: "#ef8b8b" }} onClick={() => this.handleEmailSearch(this.state.friendEmail)}>Search</button>
                        </div>
                        <div className="container" id="friendListArea">
                            <FriendList user={this.props.user} results={this.state.results} />
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