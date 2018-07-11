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
                // for each record go through and do a for each for currently watching/watching/watched and add to one array
                // sort array in order of updated at date
                // set state to that array
                let feedArr = [];
                res.data.forEach(function(record) {
                    record.currentlyWatchings.forEach(function(item1){
                        feedArr.push(item);
                    });
                    record.Watchings.forEach(function(item2){
                        feedArr.push(item);
                    });
                    record.Watcheds.forEach(function(item3){
                        feedArr.push(item);
                    });
                })
                this.setState({
                    feed: feedArr
                });
                console.log("feed state: ", this.state.feed)
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