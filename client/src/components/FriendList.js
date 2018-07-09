import React from "react";
import AddFriendBtn from "./AddFriendBtn";

const FriendList = props => (
    <div className="row">
        <div className="col md-8">
            <h3>{props.name}</h3>
            <p>{props.email}</p>
            <p>Joined Buttered Popcorn: {props.joined}</p>
        </div>
        <div className="col md-4">
            <AddFriendBtn>{props.children}</AddFriendBtn>
        </div>
    </div>
)

export default FriendList;