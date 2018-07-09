import React, { Component } from "react";
import dbAPI from "../utils/dbAPI";

class AddFriendBtn extends Component {
    state = {
        friends: false
    }

    findIfFriend = (friend) => {
        const friendId = this.props.id;
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

    render() {
        return (
            <div>
                {this.state.friends ? (
                    <button className="btn btn-success"><span class="glyphicons glyphicons-check"></span></button>
                ) : (
                        <button className="btn">Follow</button>
                    )}
            </div>
        )
    };
};

export default AddFriendBtn;