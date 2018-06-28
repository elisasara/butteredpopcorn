import React from "react";

const Results = props => (
    <div className="row">
        <div>
        <h3>{props.showTitle}</h3>
        <h3>{props.movieTitle}</h3>
        </div>
        <div>
        <h4>{props.media}</h4>
        <p>{props.overview}</p>
        </div>
    </div>

)

export default Results;