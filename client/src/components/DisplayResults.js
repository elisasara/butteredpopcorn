import React from "react";
import Results from "./Results";

const DisplayResults = props => (
    <div className="container">
    <Results results={props.children}/>
    </div>
)

export default DisplayResults;