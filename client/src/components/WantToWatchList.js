import React from "react";

const WantToWatchList = props => {
    return (
    <div>
        <ul>
            {props.wantToWatch.map(item => (
                <li>
                    <div className="row">
                    <div className="col-md-8">
                    {item.title}
                    </div>
                    <div className="col-md-4">
                    Change status option here
                    </div>
                    </div>
                </li>
            ))}
        </ul>
    </div>
    )
};

export default WantToWatchList;