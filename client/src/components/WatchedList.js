import React from "react";

const WatchedList = props => {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Type</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {props.watched.map(item => (
                        <tr key={item.id}>
                            <th scope="row">{item.title}</th>
                            <td>{item.type}</td>
                            <td>{item.rating}</td>
                            <td>Status and change option goes here</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default WatchedList;