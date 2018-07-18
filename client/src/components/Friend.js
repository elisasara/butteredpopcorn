import React from "react";
import AddFriendBtn from "./AddFriendBtn";

const Friend = props => (
    <div className="row indFriend">
        <div className="col md-8">
            <h3>{props.name}</h3>
            <p>Joined Buttered Popcorn: {props.joined}</p>
        </div>
        <div className="col md-4">
            <center><AddFriendBtn friendId={props.friendId} /></center>
        </div>
    </div>
);

export default Friend;