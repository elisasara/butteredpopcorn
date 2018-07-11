import React, { Component } from "react";
import dbAPI from "../utils/dbAPI";

class Feed extends Component {
    state = {
        feed: ""
    }

    componentDidMount() {
        this.getNewsfeed();
    }

    getNewsfeed = () => {
        dbAPI.getNewsfeed()
            .then(res => {
                console.log(res.data);
                this.setState({
                    feed: res.data
                });
            });
    };

    render() {
        return (
            <div>
                {this.state.feed.length ? (
                    <h1>This is where your newsfeed will go</h1>
                ) : (
                    <h1>You don't have any friend activity. Click here to find your friends.</h1>
                )}
            </div>
        );
    };
};

export default Feed;