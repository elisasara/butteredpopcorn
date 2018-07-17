import React from "react";
import ChangeStatus from "./ChangeStatus";
import DBInfo from "./DBInfo";

const WantToWatchList = props => {
    return (
        <div>
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
                            <td><DBInfo title={item.title} type="movie" tmdbId={item.id} user={this.props.user} />
 </td>
                            {/* <td><ChangeStatus tmdbId={item.tmdbID} title={item.title} type={item.type} status={item.status}/></td> */}
                            {/* <td><ChangeStatus info={props}/></td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default WantToWatchList;