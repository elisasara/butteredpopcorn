import React, { Component } from "react";
import dbAPI from "../utils/dbAPI";
// import Moment from "react-moment";

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
                const info = res.data;
                let feedArr = [];
                info.forEach(item => {
                    item.forEach(action => {
                        feedArr.push(action);
                    });
                });
                let feedArrSorted = feedArr.sort((a, b) => {
                    Date.prototype.getUnixTime = function () { return this.getTime() / 1000 | 0 };
                    if (!Date.now) Date.now = function () { return new Date(); }
                    Date.time = function () { return Date.now().getUnixTime(); }
                    b.sort = new Date(b.updatedAt).getUnixTime();
                    a.sort = new Date(a.updatedAt).getUnixTime();
                    return b.sort - a.sort;
                });
                // console.log("single array: ", feedArr);
                this.setState({
                    feed: feedArrSorted
                });

                console.log("state: ", this.state.feed);

                // this.setState({
                //     feed: 
                //     })
                // })
                // for each record go through and do a for each for currently watching/watching/watched and add to one array
                // sort array in order of updated at date
                // set state to that array
                //     let feedArr = [];
                //     res.data.forEach(function(record) {
                //         record.currentlyWatchings.forEach(function(item1){
                //             feedArr.push(item1);
                //         });
                //         record.Watchings.forEach(function(item2){
                //             feedArr.push(item2);
                //         });
                //         record.Watcheds.forEach(function(item3){
                //             feedArr.push(item3);
                //         });
                //     })
                //     this.setState({
                //         feed: feedArr
                //     });
                //     console.log("feed state: ", this.state.feed)
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