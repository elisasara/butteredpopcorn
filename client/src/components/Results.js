import React from "react";

const Results = props => (
    <div>
        {props.results.map(movie => (
            <div className="row">
                <h3>{movie.title}</h3>
                <h4>{movie.media_type}</h4>
                <p>{movie.overview}</p>
            </div>
        ))}
    </div>
)

export default Results;