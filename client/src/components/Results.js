import React from "react";
import { Link } from "react-router-dom";

const Results = props =>
    (
        <div>
            <div className="row" id={props.id}>
                <div>
                    {props.showTitle ? (
                        <Link to={"/search/tv/" + props.id}><h3 onClick={props.searchTitle}>{props.showTitle}</h3></Link>
                    ) : (
                            <Link to={"/search/movie/" + props.id}><h3 onClick={props.searchTitle}>{props.movieTitle}</h3></Link>
                        )}
                </div>
                <div>
                    <h4>{props.media}</h4>
                    <p>{props.overview}</p>
                </div>
            </div>
        </div>
    )

export default Results;