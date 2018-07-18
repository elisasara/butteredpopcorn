import React from "react";
import Friend from "./Friend.js";
// import AddFriendBtn from "./AddFriendBtn";

const FriendList = props => (
    <div className="row">
        {props.results.length ? (
            props.results.map(friend =>
                <Friend key={friend.id} name={friend.firstName} email={friend.email} joined={friend.createdAt} friendId={friend.id} />
            )
        ) : (
                <div>
                    <h3>No friends found.</h3>
                </div>
            )}
    </div>
)

export default FriendList;