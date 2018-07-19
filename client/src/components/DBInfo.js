import React from "react";
import WantToWatchBtn from "./WantToWatchBtn";
import WatchingBtn from "./WatchingBtn";
import WatchedBtn from "./WatchedBtn";
import Rating from "./Rating";

// class DBInfo extends Component {
//     render() {
//         return (
    const DBInfo = props => (
            <div className="container">
                {props.user ? (
                    <div>
                        <div className="row">
                            <WantToWatchBtn onClick={() => props.wantToWatch(props.tmdbId, props.title, props.type)} btnstyle={props.allData.wantToWatchButton} />
                        </div>
                        <div className="row">
                            <WatchingBtn onClick={() => props.currentlyWatching(props.tmdbId, props.title, props.type)} btnstyle={props.allData.watchingButton} />
                        </div>
                        <div className="row">
                            <WatchedBtn onClick={props.showRating} btnstyle={props.allData.watchedButton} rating={props.allData.alreadyRated} />
                        </div>
                        <div className={props.allData.visibility}>
                            <Rating visibility={props.allData.visibility} tmdbID={props.tmdbId} title={props.title} type={props.type} submitToWatched={props.watched} />
                        </div>
                    </div>
                ) : (
                        <div>
                            <p>You must be logged in to save movies or shows to one of your lists.</p>
                            <p><a href="/register" className="redLink">Create an account</a> or <a href="/login" className="redLink"    >login</a> now.</p>
                        </div>
                    )}

            </div>
        )



// <div className="col-md-4">
//     <h3>Mark as:</h3>
//     <div className="dropdown">
//         <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropbown Button</button>
//         <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//             <a className="dropdown-item" href="#">Want To Watch</a>
//             <a className="dropdown-item" href="#">Watching</a>
//             <a className="dropdown-item" href="#">Watched</a>
//         </div>
//     </div>
// </div>




export default DBInfo;