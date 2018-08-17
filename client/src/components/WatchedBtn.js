import React from "react";
import Stars from "./Stars";

const WatchedBtn = props => (
    <div>
        {props.rating ? (
            <div>
                <div className={props.btnstyle} {...props}>Watched</div>
                {/* <p>You rated this: {props.rating}</p> */}
                <p>You rated this:<span><Stars stars={props.rating} /></span></p>
            </div>
        ) : (
                <div className={props.btnstyle} {...props}>Watched</div>
            )}
    </div>
)

export default WatchedBtn;