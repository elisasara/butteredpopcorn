import React, { Component } from "react";
import MovieInfo from "./MovieInfo";
import movieAPI from "../utils/movieAPI";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class InfoPage extends Component {
    state = {
        info: {}
    }

    componentDidMount() {
        movieAPI.searchMovie(this.props.match.params.id)
            .then(res => {
                this.setState({
                    info: res.data,
                });
                console.log(this.state.info);
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <MovieInfo info={this.state.info} />
            </div>
        )
    }
}

// const InfoPage = props =>{ 
// return (
//     <div>
//         {props.children}
//     </div>
// )
// }

export default InfoPage;