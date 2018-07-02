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

    wantToWatch = (tmdbId, title) => {
        console.log("I've been clicked");
        // dbAPI.wantToWatch(tmdbId, title)
        dbAPI.wantToWatch({ tmdbID: tmdbId, title: title })
            .then(res => {
                console.log("Want to Watch added to DB");
                this.setState({
                    want: true,
                    watching: false,
                    watched: false,
                    visibility: "invisible"
                });
            })
            .catch(err => console.log(err));
    };

    currentlyWatching = (tmdbId, title) => {
        console.log("I've been clicked");
        // dbAPI.wantToWatch(tmdbId, title)
        dbAPI.currentlyWatching({ tmdbID: tmdbId, title: title })
            .then(res => {
                console.log("Watching added to DB");
                this.setState({
                    want: false,
                    watching: true,
                    watched: false,
                    visibility: "invisible"
                });
            })
            .catch(err => console.log(err));
    };

    watched = (tmdbId, title, rating) => {
        console.log("I've been clicked");
        dbAPI.watched({ tmdbID: tmdbId, title: title, rating: rating })
            .then(res => {
                console.log("Watched added to DB");
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
            visibility: "visible"
        })
    }

    render() {
        return (
            <div className="container">
                {/* <button onclick={() => this.wantToWatch(this.props.info.id)} className="btn btn-default" type="button">Want to Watch</button> */}
                <WantToWatchBtn onClick={() => this.wantToWatch(this.props.tmdbId, this.props.title)} />
                <WatchingBtn onClick={() => this.currentlyWatching(this.props.tmdbId, this.props.title)} />
                {/* <WatchedBtn onClick={() => this.watched(this.props.tmdbId, this.props.title)} /> */}
                <WatchedBtn onClick={this.showRating} />
                <Rating visibility={this.state.visibility} tmdbID={this.props.tmdbId} title={this.props.title} submitToWatched={this.watched}/>
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


// THIS HAS NOT BEEN TESTED YET!!!


export default DBInfo;