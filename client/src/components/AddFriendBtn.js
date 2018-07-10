import React, { Component } from "react";
import dbAPI from "../utils/dbAPI";

class AddFriendBtn extends Component {
    state = {
        friends: false
    }

    // move this to one level up and then send down as prop
    componentDidMount (){
        this.findIfFriend();
    }

    //this is maybe no the most efficient way to do this?? Can there be an overall call and a comparison of the two states?
    findIfFriend = () => {
        const friendId = this.props.friendId;
        dbAPI.findIfFriend(friendId)
            .then(res => {
                if (res.length > 0) {
                    this.setState = {
                        friends: true
                    };
                }
                else {
                    return false;
                };
            });
    };

    followFriend = () => {
        dbAPI.followFriend(this.props.friendId)
        .then(res => {
            this.setState({
                friends: true
            });
            alert(`Now following ${this.props.name}`);
        });
    };

    render() {
        console.log("friend id: ", this.props.friendId);
        return (
            <div>
                {this.state.friends ? (
                    <div><i className="fas fa-check-square"></i></div>
                ) : (
                        <button className="btn" onClick={this.followFriend}>Follow</button>
                    )}
            </div>
        )
    };
};

export default AddFriendBtn;