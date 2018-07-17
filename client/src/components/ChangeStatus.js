import React, { Component } from "react";
import dbAPI from "../utils/dbAPI";


class ChangeStatus extends Component {
    state = {
        want: false,
        watching: false,
        watched: false,
        value: "",
        rating: "",
        visibility: "d-none"
    }

    componentDidMount (){
        this.setState({
            value: this.props.status
        });
    };

    handleChange = event => {
        const { name, value } = event.target;
        if (value === "Watched") {
            this.setState({
                [name]: value,
                visibility: "d-block"
            });
        }
        else {
            this.setState({
                [name]: value,
                visibility: "d-none"
            });
        };
    };

    // handleSubmit = (tmdbId, title, type, rating) => {
    //     switch (this.state.value) {
    //         case "Want To Watch":
    //         this.wantToWatch(tmdbId, title, type)
    //         break;

    //         case "Watching":
    //         this.watching(tmdbId, title, type)
    //         break;

    //         case "Watched":
    //         this.watched(tmdbId, title, type, rating);
    //     }
    // }

    handleSubmit = (tmdbId, title, type, rating) => {
        if (this.state.value === "Want To Watch") {
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
        }

        if (this.state.value === "Watching") {
            dbAPI.currentlyWatching({ tmdbID: tmdbId, title: title, type: type })
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
        }

        if (this.state.value === "Watched") {
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
    };

    getRating = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <form>
                <div className="form-group-inline">
                    {/* <label htmlFor="changeStatus">Change to:</label> */}
                    <select className="form-control-inline" id="changeStatus" value={this.state.value} name="value" onChange={this.handleChange}>
                        {/* <option value="" selected disabled hidden>Change status to...</option> */}
                        <option name="value" value="Want To Watch">Want to Watch</option>
                        <option name="value" value="Watching">Watching</option>
                        <option name="value" value="Watched">Watched</option>
                    </select>
                </div>
                <div className="form-group" className={this.state.visibility}>
                    <label htmlFor="rating">Your Rating:</label>
                    <select onChange={this.getRating} name="rating" className="form-control" id="rating">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5" >5</option>
                    </select>
                </div>
                <button className="btn btn-sm btn-success" onClick={() => this.handleSubmit(this.props.tmdbId, this.props.title, this.props.type, this.state.rating)}>Update</button>
            </form>
        )
    }
}

export default ChangeStatus;