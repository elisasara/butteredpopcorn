import React from "react";

const WatchedBtn = props => (
    <div>
        {props.rating ? (
            <div>
                <div className={props.btnstyle} {...props}>Watched</div>
                <p>You rated this: {props.rating}</p>
            </div>
        ) : (
                <div className={props.btnstyle} {...props}>Watched</div>
            )}
    </div>
)

export default WatchedBtn;