import React, { Component } from "react";
import MovieInfo from "../components/MovieInfo";
import movieAPI from "../utils/movieAPI";
// import API from "../utils/API";
import DBInfo from "../components/DBInfo";
import TvInfo from "../components/TvInfo";
import dbAPI from "../utils/dbAPI";
import Loading from "../components/Loading";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class InfoPage extends Component {
    state = {
        loading: false,
        info: {},
        movie: false,
        tv: false,
        want: false,
        watching: false,
        watched: false,
        rating: "",
        visibility: "row ratingArea d-none",
        alreadyRated: "",
        wantToWatchButton: "btn btn-outline-secondary",
        watchingButton: "btn btn-outline-secondary",
        watchedButton: "btn btn-outline-secondary"
    }

    componentDidMount() {
        this.setState({
            loading: true
        });
        console.log("this.props.match: ", this.props.match)
        if (this.props.match.path === "/search/movie/:id") {
            movieAPI.searchMovie(this.props.match.params.id)
                .then(res => {
                    this.setState({
                        loading: false,
                        info: res.data,
                        movie: true,
                        tv: false
                    });
                    this.findStatus();
                    console.log(this.state.info);
                })
                .catch(err => console.log(err));
        }

        else {
            movieAPI.searchTV(this.props.match.params.id)
                .then(res => {
                    this.setState({
                        loading: false,
                        info: res.data,
                        movie: false,
                        tv: true
                    });
                    this.findStatus();
                    console.log(this.state.info);
                })
                .catch(err => console.log(err));
        }
    };

    findStatus = () => {
        dbAPI.getWatched()
            .then(res => {
                console.log("watched res.data: ", res.data);
                if (res.data.length) {
                    this.setState({
                        watched: true,
                        watching: false,
                        want: false,
                        wantToWatchButton: "btn btn-outline-secondary",
                        watchingButton: "btn btn-outline-secondary",
                        watchedButton: "btn btn-success",
                        alreadyRated: res.data[0].rating
                    });
                }
                else {
                    dbAPI.getWatching()
                        .then(res => {
                            if (res.data.length) {
                                this.setState({
                                    watched: false,
                                    watching: true,
                                    want: false,
                                    wantToWatchButton: "btn btn-outline-secondary",
                                    watchingButton: "btn btn-success",
                                    watchedButton: "btn btn-outline-secondary"
                                });
                            }
                            else {
                                dbAPI.getWantToWatch()
                                    .then(res => {
                                        if (res.data.length) {
                                            this.setState({
                                                watched: false,
                                                watching: false,
                                                want: true,
                                                wantToWatchButton: "btn btn-success",
                                                watchingButton: "btn btn-outline-secondary",
                                                watchedButton: "btn btn-outline-secondary"
                                            });
                                        };
                                    });
                            }
                        });
                }
            });
    };

    // findStatus = () => {
    //     dbAPI.getWatched()
    //         .then(res => {
    //             console.log("watched res.data: ", res.data);
    //             if (res.data.length) {
    //                 this.setState({
    //                     watched: true,
    //                     watching: false,
    //                     want: false,
    //                     wantToWatchButton: "btn btn-outline-secondary",
    //                     watchingButton: "btn btn-outline-secondary",
    //                     watchedButton: "btn btn-success",
    //                     alreadyRated: res.data[0].rating
    //                 });
    //             };
    //         });

    //     dbAPI.getWatching()
    //         .then(res => {
    //             if (res.data.length) {
    //                 this.setState({
    //                     watched: false,
    //                     watching: true,
    //                     want: false,
    //                     wantToWatchButton: "btn btn-outline-secondary",
    //                     watchingButton: "btn btn-success",
    //                     watchedButton: "btn btn-outline-secondary"
    //                 });
    //             };
    //         });

    //     dbAPI.getWantToWatch()
    //         .then(res => {
    //             if (res.data.length) {
    //                 this.setState({
    //                     watched: false,
    //                     watching: false,
    //                     want: true,
    //                     wantToWatchButton: "btn btn-success",
    //                     watchingButton: "btn btn-outline-secondary",
    //                     watchedButton: "btn btn-outline-secondary"
    //                 });
    //             };
    //         });
    // };

    wantToWatch = (tmdbId, title, type) => {
        // console.log("I've been clicked");
        // dbAPI.wantToWatch(tmdbId, title)
        dbAPI.wantToWatch({ tmdbID: tmdbId, title: title, type: type })
            .then(res => {
                console.log("Want to Watch added to DB");
                // alert(`${title} added as want to watch!`);
                this.setState({
                    want: true,
                    watching: false,
                    watched: false,
                    wantToWatchButton: "btn btn-success",
                    watchingButton: "btn btn-outline-secondary",
                    watchedButton: "btn btn-outline-secondary",
                    visibility: "row ratingArea d-none"
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
                // alert(`${title} added as currently watching!`);
                this.setState({
                    want: false,
                    watching: true,
                    watched: false,
                    watchingButton: "btn btn-success",
                    wantToWatchButton: "btn btn-outline-secondary",
                    watchedButton: "btn btn-outline-secondary",
                    visibility: "row ratingArea d-none"
                });
            })
            .catch(err => console.log(err));
    };

    watched = (tmdbId, title, type, rating) => {
        // console.log("I've been clicked");
        dbAPI.watched({ tmdbID: tmdbId, title: title, type: type, rating: rating })
            .then(res => {
                console.log("Watched added to DB");
                // alert(`${title} added as watched with a rating of ${rating}!`);
                this.setState({
                    want: false,
                    watching: false,
                    watched: true,
                    alreadyRated: `${rating}`,
                    visibility: "row ratingArea d-block",
                    watchedButton: "btn btn-success",
                    wantToWatchButton: "btn btn-outline-secondary",
                    watchingButton: "btn btn-outline-secondary"
                });
            })
            .catch(err => console.log(err));
    };

    showRating = () => {
        this.setState({
            visibility: "row ratingArea visible"
        })
    }

    // componentWillUnmount() {
    //     this.setState({
    //         wantToWatchButton: "btn btn-outline-secondary",
    //         watchingButton: "btn btn-outline-secondary",
    //         watchedButton: "btn btn-outline-secondary"
    //     })
    // }


    render() {
        return (
            <div className="container">
                {this.state.loading ? (
                    <Loading />
                ) : (this.state.movie ? (
                    <div className="row" id="infoArea">
                        <div className="col-lg-9 col-md-8 col-sm-12 border-right border-secondary">
                            <MovieInfo info={this.state.info} />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <DBInfo
                                title={this.state.info.title}
                                type="movie" tmdbId={this.state.info.id}
                                user={this.props.user}
                                allData={this.state}
                                wantToWatch={this.wantToWatch}
                                watched={this.watched}
                                currentlyWatching={this.currentlyWatching}
                                showRating={this.showRating}
                            />
                        </div>
                    </div>
                ) : (
                        <div className="row" id="infoArea">
                            <div className="col-lg-9 col-md-8 col-sm-12 border-right border-secondary">
                                <TvInfo info={this.state.info} />
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12">
                                <DBInfo
                                    title={this.state.info.name}
                                    type="tv" tmdbId={this.state.info.id}
                                    user={this.props.user}
                                    allData={this.state}
                                    wantToWatch={this.wantToWatch}
                                    watched={this.watched}
                                    currentlyWatching={this.currentlyWatching}
                                    showRating={this.showRating}
                                />
                            </div>
                        </div>)
                    )}
            </div>
        )
    }
}


// <div className="container">
//     {this.state.movie ? (
//         <div className="row" id="infoArea">
//             <div className="col-lg-9 col-md-8 col-sm-12 border-right border-secondary">
//                 <MovieInfo info={this.state.info} />
//             </div>
//             <div className="col-lg-3 col-md-4 col-sm-12">
//                 <DBInfo
//                     title={this.state.info.title}
//                     type="movie" tmdbId={this.state.info.id}
//                     user={this.props.user}
//                     allData={this.state}
//                     wantToWatch={this.wantToWatch}
//                     watched={this.watched}
//                     currentlyWatching={this.currentlyWatching}
//                     showRating={this.showRating}
//                 />
//             </div>
//         </div>) : (
//             <div className="row" id="infoArea">
//                 <div className="col-lg-9 col-md-8 col-sm-12 border-right border-secondary">
//                     <TvInfo info={this.state.info} />
//                 </div>
//                 <div className="col-lg-3 col-md-4 col-sm-12">
//                     <DBInfo
//                         title={this.state.info.name}
//                         type="tv" tmdbId={this.state.info.id}
//                         user={this.props.user}
//                         allData={this.state}
//                         wantToWatch={this.wantToWatch}
//                         watched={this.watched}
//                         currentlyWatching={this.currentlyWatching}
//                         showRating={this.showRating}
//                     />
//                 </div>
//             </div>)}
//     {/* </div> */}
// </div>
// )


export default InfoPage;