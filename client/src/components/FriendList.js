import React from "react";

const FriendList = props => (
    <div className="row">
        <div className="col md-8">
            <h3>{props.name}</h3>
            <p>{props.email}</p>
            <p>Joined Buttered Popcorn: {props.joined}</p>
        </div>
        <div className="col md-4">
            <h3>Button Goes Here</h3>
            <p>{props.id} for button</p>
        </div>
    </div>
)

export default FriendList;