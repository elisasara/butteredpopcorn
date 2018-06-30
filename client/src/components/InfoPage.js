import React, { Component } from "react";
import MovieInfo from "./MovieInfo";
import movieAPI from "../utils/movieAPI";
import API from "../utils/API";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class InfoPage extends Component {
    state = {
        info: {},
        // user: null
    }

    componentDidMount() {
        // get movie info
        movieAPI.searchMovie(this.props.match.params.id)
            .then(res => {
                this.setState({
                    info: res.data,
                });
                console.log(this.state.info);
            })
            .catch(err => console.log(err));

        // get user info
        API.getUser()
            .then(res => {
                console.log("res:", res);
                this.setState({
                    user: res
                });
            })
            .catch(err => console.log(err));

    }


    render() {
        console.log(this.state);
        // put in db entering info here as well. float left and right for that info
        // work on formating of movie page
        // work on tv version of this as well
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