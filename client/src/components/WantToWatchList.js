import React from "react";

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
                    </tr>
                </thead>
                <tbody>
                    {props.wantToWatch.map(item => (
                        <tr key={item.id}>
                            <th scope="row">{item.title}</th>
                            <td>{item.type}</td>
                            <td>{item.updatedAt}</td>
                            <td>Status and change option goes here</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default WantToWatchList;