import React from "react";
import ChangeStatus from "./ChangeStatus";
import DBInfo from "./DBInfo";

const WantToWatchList = props => {
    return (
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Type</th>
                        <th scope="col">Date Added</th>
                        <th scope="col">Status</th>
                        {/* <th scope="col"></th> */}
                    </tr>
                </thead>
                <tbody>
                    {props.wantToWatch.map(item => (
                        <tr key={item.id}>
                            <th scope="row">{item.title}</th>
                            <td>{item.type}</td>
                            <td>{item.updatedAt}</td>
                            <td><ChangeStatus tmdbId={item.tmdbID} title={item.title} type={item.type} status={item.status}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default WantToWatchList;