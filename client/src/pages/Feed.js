import React, { Component } from "react";
import dbAPI from "../utils/dbAPI";
import NewsItem from "../components/NewsItem";
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
            });
    };

    render() {
        return (
            <div>
                {this.state.feed.length ? (
                    // <h1>Newsfeed goes here</h1>
                    <div>
                        {this.state.feed.map(news => (
                            <NewsItem
                                key={news.title}
                                name={news.User.firstName}
                                title={news.title}
                                rating={news.rating}
                                status={news.status}
                            />
                        ))}
                    </div>
                ) : (
                        <h1>You don't have any friend activity. Click here to find your friends.</h1>
                    )}
            </div>
        );
    };
};

export default Feed;