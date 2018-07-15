import React from "react";
import { Link } from "react-router-dom";

const Results = props =>
    (
        <div className="resultContainer">
            <div className="row" id={props.id}>
                <div>
                    {props.showTitle ? (
                        <div>
                        <Link to={"/search/tv/" + props.id}><h3 className="displayTitle" onClick={props.searchTitle}>{props.showTitle}</h3></Link>
                        <p><em>{props.media}</em><br />{props.overview}</p>
                        </div>
                    ) : (
                        <div>
                            <Link to={"/search/movie/" + props.id}><h3 className="displayTitle" onClick={props.searchTitle}>{props.movieTitle}</h3></Link>
                            <p><em>{props.media}</em><br />{props.overview}</p>
                            </div>
                        )}
                </div>
                {/* <div>

                </div> */}
            </div>
        </div>
    )

export default Results;