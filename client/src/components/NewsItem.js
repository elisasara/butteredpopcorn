import React, { Component } from "react";

class NewsItem extends Component {
    state = {
        watched: false,
        watching: false,
        wantToWatch: false
    }

    componentDidMount (){
        this.checkStatus();
    }

    checkStatus = () => {
        if (this.props.status === "Watched") {
            this.setState({
                watched: true
            });
        }
        if (this.props.status === "Watching") {
            this.setState({
                watching: true
            });
        }
        if (this.props.status === "Want To Watch") {
            this.setState({
                wantToWatch: true
            });
        };
    };

    render() {
        return (
            <div className="container">
            {this.state.watched ? (
                <div>
                    <h5><strong>{this.props.name}</strong> watched <em><a href={`/search/${this.props.type}/${this.props.id}`} className="redLink">{this.props.title}</a></em> and rated it {this.props.rating} <span><img src="https://www.freepngimg.com/download/popcorn/22995-2-popcorn-hd.png" className=" img-responsive popcornRating" alt="popcorn" /></span></h5>
                </div>
            ) : this.state.watching ? (
                <div>
                    <h5><strong>{this.props.name}</strong> is now watching <em><a href={`/search/${this.props.type}/${this.props.id}`} className="redLink">{this.props.title}</a></em>.</h5>
                </div>
            ) : (
                <div>
                    <h5><strong>{this.props.name}</strong> added <em><a href={`/search/${this.props.type}/${this.props.id}`} className="redLink">{this.props.title}</a></em> to their want to watch list.</h5>
                </div>
            )}
            </div>
        );
    };
};

export default NewsItem;