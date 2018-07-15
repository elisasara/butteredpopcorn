import React, { Component } from "react";
import MovieInfo from "../components/MovieInfo";
import movieAPI from "../utils/movieAPI";
// import API from "../utils/API";
import DBInfo from "../components/DBInfo";
import TvInfo from "../components/TvInfo";

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
                {this.state.movie ? (<div className="row">
                <div className="col l10 m9 s12">
                    <MovieInfo info={this.state.info} />
                    </div>
                    <div className="col l2 m3 s12">
                    <DBInfo title={this.state.info.title} type="movie" tmdbId={this.state.info.id} />
                </div>
                </div>) : (<div className="row">
                    <div className="col l10 m9 s12">
                        <TvInfo info={this.state.info} />
                    </div>
                    <div className="col l2 m3 s12">
                        <DBInfo title={this.state.info.name} type="tv" tmdbId={this.state.info.id} />
                    </div>
                </div>)}
            </div>
        )
    }
}

export default InfoPage;