import React, {Component} from "react";
import ChangeStatus from "./ChangeStatus";
import Stars from "./Stars";

// class WatchedList extends Component {
//     state = {
//         stars: []
//     }

//     // componentDidMount (){
//     //     this.getStars();
//     // }

//     getStars = stars => {
//         const starArr=[];
//         const starsGiven = stars;
//         let i = 0
//         while (i <starsGiven) {
//             starArr.push("<span><i class=`fas fa-star`></i></span>")
//             i++
//         }
//         this.setState({
//             stars: starArr
//         });
//     };

//     render (){
//         return (
//             <div className="table-responsive">
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th scope="col">Title</th>
//                             <th scope="col">Type</th>
//                             <th scope="col">Rating</th>
//                             <th scope="col">Status</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.props.watched.map(item => {
//                             this.getStars(item.stars);
//                             return (
//                             <tr key={item.id}>
//                                 <th scope="row">{item.title}</th>
//                                 <td>{item.type}</td>
//                                 {/* <td>{item.rating}</td> */}
//                                 <td>{this.state.stars}</td>
//                                 <td><ChangeStatus tmdbId={item.tmdbID} title={item.title} type={item.type} status={item.status}/></td>
//                             </tr>
//                         )}
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         );  
//     };

// }

const WatchedList = props => {
    return (
        <div className="table-responsive">
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