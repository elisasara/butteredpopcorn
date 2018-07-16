import React, { Component } from "react";
import dbAPI from "../utils/dbAPI";


class ChangeStatus extends Component {
    state = {
        want: false,
        watching: false,
        watched: false,
        value: "",
        rating: "",
        visibility: "invisible"
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

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
            // <div className="dropbown">
            //     <button type="button" class="btn btn-secondary dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            //         Change to:
            // </button>
            //     <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            //         <a className="dropdown-item" href="#">Want To Watch</a>
            //         <a className="dropdown-item" href="#">Watching</a>
            //         <a className="dropdown-item" href="#">Watched</a>
            //     </div>
            // </div>
            <form>
                <div className="form-group">
                <label htmlFor="changeStatus">Change status to:</label>
                <select className="form-control" id="changeStatus" name="value" defaultValue={this.props.status} onChange={this.handleChange}>
                {/* <option value="" defaultValue disabled hidden>Change status to...</option> */}
                <option value="Want To Watch">Want to Watch</option>
                <option value="Watching">Watching</option>
                <option value="Watched">Watched</option>                
                </select>
                </div>
            </form>
        )
    }
}

export default ChangeStatus;