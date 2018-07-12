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
            <div>
            {this.state.watched ? (
                <div>
                    <p>{this.props.name} watched {this.props.title} and gave it {this.props.rating} stars</p>
                </div>
            ) : this.state.watching ? (
                <div>
                    <p>{this.props.name} is now watching {this.props.title}.</p>
                </div>
            ) : (
                <div>
                    <p>{this.props.name} added {this.props.title} to their want to watch list.</p>
                </div>
            )}
            </div>
        );
    };
};

export default NewsItem;