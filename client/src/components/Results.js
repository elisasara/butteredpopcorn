import React, { Component } from "react";
import { Link } from "react-router-dom";

class Results extends Component {
    state = {
        hasImage: true,
        imageURL: ""
    }

    componentDidMount(){
        this.findImage();
    }

    findImage = () => {
        if (this.props.imageURL) {
            this.setState({
                imageURL: `https://image.tmdb.org/t/p/w200/${this.props.imageURL}`
            })
        }
        else {
            this.setState({
                hasImage: false,
                imageURL: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
            })
        };
    };

    render(){
       return (
            <div className="resultContainer">
                <div className="row" id={this.props.id}>
                    <div>
                        {this.props.showTitle ? (
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-12">
                                    <img src={this.state.imageURL} className="img-responsive posterForSearch" />
                                </div>
                                <div className="col-lg-9 col-lg-9 col-sm-12 searchInfo">
                                    <Link to={"/search/tv/" + this.props.id} className="redLink"><h3 className="displayTitle" onClick={this.props.searchTitle}>{this.props.showTitle}</h3></Link>
                                    <p><em>{this.props.media}</em><br />{this.props.overview}</p>
                                </div>
                            </div>
                        ) : (
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-12">
                                        <img src={this.state.imageURL} className="img-responsive posterForSearch" />
                                    </div>
                                    <div className="col-lg-9 col-lg-9 col-sm-12 searchInfo">
                                        <Link to={"/search/movie/" + this.props.id} className="redLink"><h3 className="displayTitle" onClick={this.props.searchTitle}>{this.props.movieTitle}</h3></Link>
                                        <p><em>{this.props.media}</em><br />{this.props.overview}</p>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        )
    }
}




export default Results;