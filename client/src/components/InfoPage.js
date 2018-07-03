import React, { Component } from "react";
import MovieInfo from "./MovieInfo";
import movieAPI from "../utils/movieAPI";
import API from "../utils/API";
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
        if (this.props.match === "/search/movie/:id") {
            movieAPI.searchMovie(this.props.match.params.id)
                .then(res => {
                    this.setState({
                        info: res.data,
                        movie: true
                    });
                    console.log(this.state.info);
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
                    console.log(this.state.info);
                })
                .catch(err => console.log(err));
        }
    }


    render() {
        // put in db entering info here as well. float left and right for that info
        // work on formating of movie page
        // work on tv version of this as well
        return (
            <div>
                {this.state.movie ? (<div>
                    <MovieInfo info={this.state.info} />
                    <DBInfo title={this.state.info.title} tmdbId={this.state.info.id} />
                </div>) : (<div>
                    <TvInfo info={this.state.info} />
                    {/* <h1>TV Info goes here</h1> */}
                    {/* <DBInfo title={this.state.info.title} tmdbId={this.state.info.id} /> */}
                </div>)}
            </div>
        )
    }
}

export default InfoPage;