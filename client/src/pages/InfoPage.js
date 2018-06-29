import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



const InfoPage = props => (
    <div>
        <div>
            {props.children}
            {/* this div goes to the left */}
        </div>
        <div>
            this div goes to the right
        </div>
    </div>
)

export default InfoPage;