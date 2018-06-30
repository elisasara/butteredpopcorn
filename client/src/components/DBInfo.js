import React from "react";
import dbAPI from "../utils/dbAPI";

const DBInfo = props => {
    const wantToWatch = (userId, tmdbId) => {
        dbAPI.wantToWatch({ userId: userId, tmdbId: tmdbId })
            .then(res => {
                console.log(res);
            })
            .catch(err => console.loh(err));
    };

    return (
        <div className="col-md-4">
            <h3>Mark as:</h3>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropbown Button</button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Want To Watch</a>
                    <a className="dropdown-item" href="#">Watching</a>
                    <a className="dropdown-item" href="#">Watched</a>
                </div>
            </div>
        </div>
    )
}

export default DBInfo;