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

    //this is maybe not the most efficient way to do this?? Can there be an overall call and a comparison of the two states?
    findIfFriend = () => {
        const friendId = this.props.friendId;
        dbAPI.findIfFriend(friendId)
            .then(res => {
                console.log("res for addfriendbutton: ", res.data);
                if (res.data.length > 0) {
                    this.setState({
                        friends: true
                    });
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
            alert(`Friend added!`);
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