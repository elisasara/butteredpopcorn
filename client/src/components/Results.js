import React from "react";

const Results = props => (
    <div className="row">
        <h3>{props.title}</h3>
        <h4>{props.media}</h4>
        <p>{props.overview}</p>
    </div>

)

export default Results;