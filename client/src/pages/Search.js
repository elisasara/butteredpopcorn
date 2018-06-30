import React, { Component } from "react";
import Header from "../components/Header";
import InfoPage from "../components/InfoPage";
import MovieInfo from "../components/MovieInfo";
import DisplayResults from "../components/DisplayResults";
import Results from "../components/Results";
import movieAPI from "../utils/movieAPI";

class Search extends Component {
    state = {
        search: "",
        results: [],
        info: {},
        hasInfo: false
    }

    // findIfInfo = () => {
    //     if (this.state.info === {}) {
    //         return false;
    //         console.log("No info");
    //     }
    //     else {
    //         return true;
    //         console.log("Yes Info");
    //     };
    // };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        const search = this.state.search;
        console.log(search);
        movieAPI.searchFor(search)
            .then(res => {
                this.setState({
                    results: res.data
                })
                console.log(this.state.results);
            })
            .catch(err => console.log(err));
    };

    // function for searching for movie
    searchTitle = event => {
        const id = this.props.id;
        const type = this.props.media;
        console.log("id", id);
        console.log("media:", type);

        if (type === "movie") {
            movieAPI.searchMovie(id)
                .then(res => {
                    this.setState({
                        info: res.data,
                        hasInfo: true
                    });
                    console.log(this.state.info);
                    console.log(this.state.hasInfo);
                })
                .catch(err => console.log(err));
        };

        if (type === "tv") {
            movieAPI.searchTV(id)
                .then(res => {
                    this.setState({
                        info: res.data,
                        hasInfo: true
                    });
                    console.log(this.state.info);
                    console.log(this.state.hasInfo);
                })
                .catch(err => console.log(err));
        };
    };


    render() {
        if (this.state.hasInfo) {
            return (
                <div>
                    <Header
                        handleSubmit={this.handleSubmit}
                        handleInputChange={this.handleInputChange}
                        search={this.state.search}
                    />
                    <InfoPage>
                        <MovieInfo info={this.state.info} />
                    </InfoPage>
                </div>
            )
        }
        else {
            return (
                <div>
                    <Header
                        handleSubmit={this.handleSubmit}
                        handleInputChange={this.handleInputChange}
                        search={this.state.search}
                    />
                    {/* <h1>This is what I should be seeing!</h1> */}
                    <DisplayResults>
                        {this.state.results.map(title => (
                            <Results
                                key={title.id}
                                id={title.id}
                                showTitle={title.name}
                                movieTitle={title.title}
                                media={title.media_type}
                                overview={title.overview}
                                searchTitle={this.searchTitle}
                            />
                        ))}
                    </DisplayResults>
                </div>
            )
        }
        // else if (this.state.results.length) {
        //     return (
        //         <div>
        //             <Header
        //                 handleSubmit={this.handleSubmit}
        //                 handleInputChange={this.handleInputChange}
        //                 search={this.state.search}
        //             />
        //             <DisplayResults>
        //                 {this.state.results.map(title => (
        //                     <Results
        //                         key={title.id}
        //                         id={title.id}
        //                         showTitle={title.name}
        //                         movieTitle={title.title}
        //                         media={title.media_type}
        //                         overview={title.overview}
        //                         searchTitle={this.searchTitle}
        //                     />
        //                 ))}
        //             </DisplayResults>
        //         </div>
        //     )
        // }

        // else {
        //     return (
        //         <div>
        //             <Header
        //                 handleSubmit={this.handleSubmit}
        //                 handleInputChange={this.handleInputChange}
        //                 search={this.state.search}
        //             />
        //             <div>
        //                 <h3>Search to find results</h3>
        //             </div>
        //         </div>
        //     )
        // }
    };
}

export default Search;