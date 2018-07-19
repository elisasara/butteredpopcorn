import React, { Component } from "react";
// import API from "../utils/API";
// import Header from "../components/Header";
import DisplayResults from "../components/DisplayResults";
import Results from "../components/Results";
import movieAPI from "../utils/movieAPI";


class MainSearch extends Component {
    state = {
        results: []
    }

    componentDidMount() {
        this.handleSubmit();
    }

    handleSubmit = () => {
        // event.preventDefault();
        const search = this.props.match.params.search;
        // console.log(search);
        movieAPI.searchFor(search)
            .then(res => {
                this.setState({
                    results: res.data
                })
            })
            .catch(err => console.log(err));
    };

    render() {
        if (this.state.results.length) {
            return (
                <div className="container">
                    <DisplayResults>
                        {this.state.results.map(title => (
                            <div key={title.id}>
                                <Results
                                    id={title.id}
                                    showTitle={title.name}
                                    movieTitle={title.title}
                                    media={title.media_type}
                                    overview={title.overview}
                                    searchTitle={this.searchTitle}
                                    imageURL={title.poster_path}
                                />
                                <hr />
                            </div>
                        ))}
                    </DisplayResults>
                </div>
            )
        }
        else {
            return (
                <div>
                    <h2>There are no results matching that title</h2>
                </div>
            )
        }
    }
}


export default MainSearch;
