import React from "react";
import AddFriendBtn from "./AddFriendBtn";
import moment from "moment";

const Friend = props => (
    <div className="row indFriend">
        <div className="col md-8">
            <h3>{props.name}</h3>
            <p>Joined Buttered Popcorn: {moment(props.joined).format("MMMM DD, YYYY")}</p>
        </div>
        <div className="col md-4">
            <center><AddFriendBtn friendId={props.friendId} /></center>
        </div>
    </div>
);

export default Friend;