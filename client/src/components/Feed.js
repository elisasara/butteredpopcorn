import React, { Component } from "react";
import { Link } from "react-router-dom";
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
                    <div className="container">
                        <div className="container table-responsive" id="newsFeedArea">
                            <h5 style={{paddingTop: "7px"}}>Here's what your friends have been up to:</h5>
                            <br />
                            <table className="table table-striped" id="newsFeed">
                                <thead>
                                </thead>
                                <tbody>
                                    {this.state.feed.map(news => (
                                        <tr>
                                            <td>
                                                <NewsItem
                                                    key={`${news.User.firstName}${news.tmdbID}`}
                                                    id={news.tmdbID}
                                                    name={news.User.fullName}
                                                    title={news.title}
                                                    type={news.type}
                                                    rating={news.rating}
                                                    status={news.status}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                        <div className="text-center">
                            <h5>You don't have any friend activity.</h5>
                            <Link to="/findfriends" className="redLink"><h5>Click here to find your friends.</h5></Link>
                        </div>
                    )}
            </div>
        );
    };
};

export default Feed;