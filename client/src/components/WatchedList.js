import React from "react";
import ChangeStatus from "./ChangeStatus";
import Stars from "./Stars";
import moment from "moment";

const WatchedList = props => {
    return (
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Type</th>
                        <th scope="col">Date Added</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {props.watched.map(item => (
                        <tr key={item.id}>
                            <th scope="row">{item.title}</th>
                            <td>{item.type}</td>
                            <td>{moment(item.updatedAt).format("MMMM DD, YYYY")}</td>
                            <td><Stars stars={item.rating}/></td>
                            <td><ChangeStatus tmdbId={item.tmdbID} title={item.title} type={item.type} status={item.status}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default WatchedList;