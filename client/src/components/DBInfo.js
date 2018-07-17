import React, { Component } from "react";
import dbAPI from "../utils/dbAPI";
import WantToWatchBtn from "./WantToWatchBtn";
import WatchingBtn from "./WatchingBtn";
import WatchedBtn from "./WatchedBtn";
import Rating from "./Rating";

class DBInfo extends Component {
    // use state to highlight which option was chosen
    state = {
        want: false,
        watching: false,
        watched: false,
        rating: "",
        visibility: "invisible"
    }

    wantToWatch = (tmdbId, title, type) => {
        // console.log("I've been clicked");
        // dbAPI.wantToWatch(tmdbId, title)
        dbAPI.wantToWatch({ tmdbID: tmdbId, title: title, type: type })
            .then(res => {
                console.log("Want to Watch added to DB");
                alert(`${title} added as want to watch!`);
                this.setState({
                    want: true,
                    watching: false,
                    watched: false,
                    visibility: "row ratingArea invisible"
                });
            })
            .catch(err => console.log(err));
    };

    currentlyWatching = (tmdbId, title, type) => {
        // console.log("I've been clicked");
        // dbAPI.wantToWatch(tmdbId, title)
        dbAPI.currentlyWatching({ tmdbID: tmdbId, title: title, type })
            .then(res => {
                console.log("Watching added to DB");
                alert(`${title} added as currently watching!`);
                this.setState({
                    want: false,
                    watching: true,
                    watched: false,
                    visibility: "invisible"
                });
            })
            .catch(err => console.log(err));
    };

    watched = (tmdbId, title, type, rating) => {
        // console.log("I've been clicked");
        dbAPI.watched({ tmdbID: tmdbId, title: title, type: type, rating: rating })
            .then(res => {
                console.log("Watched added to DB");
                alert(`${title} added as watched with a rating of ${rating}!`);
                this.setState({
                    want: false,
                    watching: false,
                    watched: true
                });
            })
            .catch(err => console.log(err));
    };

    showRating = () => {
        this.setState({
            visibility: "row ratingArea visible"
        })
    }

    render() {
        return (
            <div className="container">
                {this.props.user ? (
                    <div>
                    <div className="row">
                        <WantToWatchBtn onClick={() => this.wantToWatch(this.props.tmdbId, this.props.title, this.props.type)} />
                    </div>
                    <div className="row">
                        <WatchingBtn onClick={() => this.currentlyWatching(this.props.tmdbId, this.props.title, this.props.type)} />
                    </div>
                    <div className="row">
                        <WatchedBtn onClick={this.showRating} />
                    </div>
                    <div className={this.state.visibility}>
                        <Rating visibility={this.state.visibility} tmdbID={this.props.tmdbId} title={this.props.title} type={this.props.type} submitToWatched={this.watched} />
                    </div>
                    </div>
            ) : (
                <div>
                    <p>You must be logged in to save movies or shows to one of your lists.</p>
                    <p><a href="/register">Create an account</a> or <a href="/login">login</a> now.</p>
                    </div>
            )}

            </div>
        )
    }
}



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