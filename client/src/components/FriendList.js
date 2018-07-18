import React from "react";
import Friend from "./Friend.js";
// import AddFriendBtn from "./AddFriendBtn";

const FriendList = props => (
    <div className="container" id="friendList">
        {/* <div className="row"> */}
            {props.results.length ? (
                props.results.map(friend =>
                    <div>
                    <Friend key={friend.id} name={friend.firstName} email={friend.email} joined={friend.createdAt} friendId={friend.id} />
                    <hr />
                    </div>

                )
            ) : (
                    <div>
                        <h3>No friends found.</h3>
                    </div>
                )}
        {/* </div> */}
    </div>
)

export default FriendList;