import React, { Component } from "react";
import MovieInfo from "./MovieInfo";
import movieAPI from "../utils/movieAPI";
// import API from "../utils/API";
import DBInfo from "./DBInfo";
import TvInfo from "./TvInfo";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class InfoPage extends Component {
    state = {
        info: {},
        movie: false,
        tv: false
    }

    componentDidMount() {
        console.log("this.props.match: ", this.props.match)
        if (this.props.match.path === "/search/movie/:id") {
            movieAPI.searchMovie(this.props.match.params.id)
                .then(res => {
                    this.setState({
                        info: res.data,
                        movie: true
                    });
                    // console.log(this.state.info);
                })
                .catch(err => console.log(err));
        }

        else {
            movieAPI.searchTV(this.props.match.params.id)
                .then(res => {
                    this.setState({
                        info: res.data,
                        tv: true
                    });
                    // console.log(this.state.info);
                })
                .catch(err => console.log(err));
        }
    }


    render() {
        return (
            <div>
                {this.state.movie ? (<div>
                    <MovieInfo info={this.state.info} />
                    <DBInfo title={this.state.info.title} type="movie" tmdbId={this.state.info.id} />
                </div>) : (<div>
                    <TvInfo info={this.state.info} />
                    <DBInfo title={this.state.info.name} type="tv" tmdbId={this.state.info.id} />
                    {/* <h1>TV Info goes here</h1> */}
                    {/* <DBInfo title={this.state.info.title} tmdbId={this.state.info.id} /> */}
                </div>)}
            </div>
        )
    }
}

export default InfoPage;