import React, { Component } from "react";
import dbAPI from "../utils/dbAPI";

class Profile extends Component {
    state = {
        userInfo: "",
        watched: "",
        wantToWatch: "",
        watching: ""
    }

    componentDidMount(){
        this.getUserFromDb();
        this.getWatched();
        this.getWantToWatch();
        this.getWatching();
    }

    getUserFromDb = () => {
        dbAPI.getUserFromDb()
        .then(res => {
            this.setState({
                userInfo: res.data
            });
            console.log("User Info: ", res.data);
        })
    }

    getWatched = () => {
        // dbAPI.getWatched
        dbAPI.getWatched()
            .then(res => {
                this.setState({
                    watched: res.data
                });
                console.log("Watched: ", res.data);
            });
    };

    getWatching = () => {
        // dbAPI.getWatched
        dbAPI.getWatching()
            .then(res => {
                this.setState({
                    watching: res.data
                });
                console.log("Watching: ", res.data);
            });
    };

    getWantToWatch = () => {
        // dbAPI.getWatched
        dbAPI.getWantToWatch()
            .then(res => {
                this.setState({
                    wantToWatch: res.data
                });
                console.log("Want to watch: ", res.data);
            });
    };

    render() {
        return(
            <div>
                <h1>Info goes here</h1>
            </div>
        )
    };
};

export default Profile;