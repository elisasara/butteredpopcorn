import React, { Component } from "react";
import dbAPI from "../utils/dbAPI";
import WantToWatchList from "../components/WantToWatchList";
import WatchedList from "../components/WatchedList";
import WatchingList from "../components/WatchingList";
import RandomSelect from "../components/RandomSelect";

class Profile extends Component {
    state = {
        userInfo: "",
        watched: [],
        wantToWatch: [],
        watching: []
    }

    componentDidMount() {
        this.getUserFromDb();
        this.getWatched();
        this.getWantToWatch();
        this.getWatching();
    }

    getUserFromDb = () => {
        dbAPI.getUserFromDb()
            .then(res => {
                this.setState({
                    userInfo: res.data[0]
                });
                console.log("User Info: ", res.data);
            })
    }

    getWatched = () => {
        // dbAPI.getWatched
        dbAPI.getWatched()
            .then(res => {
                this.setState({
                    watched: res.data
                });
                console.log("Watched: ", res.data);
            });
    };

    getWatching = () => {
        // dbAPI.getWatched
        dbAPI.getWatching()
            .then(res => {
                this.setState({
                    watching: res.data
                });
                console.log("Watching: ", res.data);
            });
    };

    getWantToWatch = () => {
        // dbAPI.getWatched
        dbAPI.getWantToWatch()
            .then(res => {
                this.setState({
                    wantToWatch: res.data
                });
                console.log("Want to watch: ", res.data);
            });
    };

    render() {
        return (
            <div>
                <h1>{this.state.userInfo.firstName}</h1>
                <div>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link" id="wants-tab" data-toggle="tab" href="#wants" role="tab" aria-controls="wants" aria-selected="true">Want To Watch</a>
                        </li>
                        <li className="nav nav-tabs">
                            <a className="nav-link" id="watching-tab" data-toggle="tab" href="#watching" role="tab" aria-controls="watching" aria-selected="false">Watching</a>
                        </li>
                        <li className="nav nav-tabs">
                            <a className="nav-link" id="watched-tab" data-toggle="tab" href="#watched" role="tab" aria-controls="watched" aria-selected="false">Watched</a>
                        </li>
                    </ul>
                    <div className="tab-content">

                        <div className="tab-pane fade show active" id="wants" role="tabpanel" aria-labelledby="wants-tab">
                            {this.state.wantToWatch.length ? (
                                <div>
                                    <RandomSelect options={this.state.wantToWatch} />
                                    <WantToWatchList wantToWatch={this.state.wantToWatch} />
                                </div>
                            ) : (
                                    <h3 className="noList">You haven't added any movies or shows to your Want To Watch list yet.</h3>
                                )}
                        </div>
                        <div className="tab-pane fade" id="watching" role="tabpanel" aria-labelledby="watching-tab">
                            {this.state.watching.length ? (
                                <WatchingList watching={this.state.watching} />
                            ) : (
                                    <h3 className="noList">You haven't added any movies or shows to your Watching list yet.</h3>
                                )}
                        </div>
                        <div className="tab-pane fade" id="watched" role="tabpanel" aria-labelledby="watched-tab">
                            {this.state.watched.length ? (
                                <WatchedList watched={this.state.watched} />
                            ) : (
                                    <h3 className="noList">You haven't added any movies or shows to your Watched list yet.</h3>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default Profile;