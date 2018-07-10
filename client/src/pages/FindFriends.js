import React, { Component } from "react";
import dbAPI from "../utils/dbAPI";
import FriendList from "../components/FriendList";

class FindFriends extends Component {
    state = {
        searchFriends: "",
        results: []
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSearch = email => {
        // event.preventDefault();
        const friend = this.state.searchFriends;
        console.log("Friend Search: ", friend);
        dbAPI.getSearchedFriend(friend)
            .then(res => {
                console.log("friend res: ", res.data);
                this.setState({
                    results: res.data
                });
            });
    };

    render() {
        return (
            <div className="container">
                {/* <form className="form-inline"> */}
                <div className="form-group">
                    <label htmlFor="friendEmail">Search by Email:</label>
                    <input type="text" className="form-control" name="searchFriends" value={this.state.searchFriends} id="friendEmail" onChange={this.handleInputChange} />
                </div>
                <button className="btn btn-primary" onClick={() => this.handleSearch(this.state.searchFriends)}>Search</button>
                {/* </form> */}
                {this.state.results.length ? (
                    this.state.results.map(friend =>
                        <FriendList key={friend.id} name={friend.firstName} email={friend.email} joined={friend.createdAt} friendId={friend.id} />
                    )
                ) : (
                        <h1>Search for your friends here!</h1>
                    )}
            </div>
        )
    }
}

export default FindFriends;