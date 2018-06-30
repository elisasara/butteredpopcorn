import React from "react";
// import movieAPI from "../utils/movieAPI";
import { Link } from "react-router-dom";

// import InfoPage from "./InfoPage";
// import MovieInfo from "./MovieInfo";


// class Results extends Component {
//     state = {
//         info: {},
//         infoPopulated: false
//     }

//     // function for searching for movie
//     searchTitle = event => {
//         const id = this.props.id;
//         const type = this.props.media;
//         console.log("id", id);
//         console.log("media:", type);

//         if (type === "movie") {
//             movieAPI.searchMovie(id)
//                 .then(res => {
//                     this.setState({
//                         info: res.data,
//                         infoPopulated: true
//                     });
//                     console.log(this.state.info);
//                     console.log(this.state.infoPopulated);
//                 })
//                 .catch(err => console.log(err));
//         }

//         else if (type === "tv") {
//             movieAPI.searchTV(id)
//                 .then(res => {
//                     this.setState({
//                         info: res.data,
//                         infoPopulated: true
//                     });
//                     console.log(this.state.info);
//                     console.log(this.state.infoPopulated);
//                 })
//                 .catch(err => console.log(err));
//         };
//     };

//     render() {
//         return (
//             <div>
//                 <div className="row" id={this.props.id}>
//                     <div>
//                         {this.props.showTitle ? (
//                             <Link to={"/search/tv/" + this.props.id}><h3 onClick={this.searchTitle}>{this.props.showTitle}</h3></Link>
//                         ) : (
//                                 <Link to={"/search/movie/" + this.props.id}><h3 onClick={this.searchTitle}>{this.props.movieTitle}</h3></Link>
//                             )}
//                     </div>
//                     <div>
//                         <h4>{this.props.media}</h4>
//                         <p>{this.props.overview}</p>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// };

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

// const Results = props => (
//             <div>
//                     <div className="row" id={this.props.id}>
//                         <div>
//                             {this.props.showTitle ? (
//                                 <h3 onClick={this.props.searchTitle}>{this.props.showTitle}</h3>
//                             ) : (
//                                     <h3 onClick={this.props.searchTitle}>{this.props.movieTitle}</h3>
//                                 )}
//                         </div>
//                         <div>
//                             <h4>{this.props.media}</h4>
//                             <p>{this.props.overview}</p>
//                         </div>
//                     </div>
//             </div>
//         )



// const Results = props => (
//     <div className="row" id={props.id}>
//         <div>
//         {props.showTitle ? 
//         // (<a href="/info"><h3 onClick={() => props.searchTitle(props.id, props.media)}>{props.showTitle}</h3></a>) :
//         // (<a href="/info"><h3 onClick={() => props.searchTitle(props.id, props.media)}>{props.movieTitle}</h3></a>)}
//        (<h3 onClick={() => props.searchTitle(props.id, props.media)}>{props.showTitle}</h3>) :
//         (<h3 onClick={() => props.searchTitle(props.id, props.media)}>{props.movieTitle}</h3>)}

//         </div>
//         <div>
//         <h4>{props.media}</h4>
//         <p>{props.overview}</p>
//         </div>
//     </div>

// )

export default Results;