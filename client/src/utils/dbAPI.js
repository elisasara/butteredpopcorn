import axios from "axios";  

export default {
    wantToWatch: function(movieData) {
       return axios.post("/db/towatch", {movieData});
    },

    currentlyWatching: function(movieData) {
        return axios.post("/db/watching", {movieData});
    },

    watched: function(movieData) {
        return axios.post("/db/watched", {movieData});
    },

    getWatched: function() {
        return axios.get("/db/watched");
    },

    getWatching: function() {
        return axios.get("/db/watching");
    },

    getWantToWatch: function() {
        return axios.get("/db/towatch");
    },

    //TEST FOR BUTTONS
    getThisWatched: function(titleId) {
        console.log("Title ID:", titleId);
        return axios.get(`/db/thiswatched/${titleId}`);
    },

    getThisWatching: function(titleId) {
        console.log("Title ID:", titleId);
        return axios.get(`/db/thiswatching/${titleId}`);
    },

    getThisToWatch: function(titleId) {
        console.log("Title ID:", titleId);
        return axios.get(`/db/thistowatch/${titleId}`);
    },

    // End Test Area

    getUserFromDb: function() {
        return axios.get("/db/user");
    },

    getSearchedFriendbyEmail: function(friendEmail) {
        console.log("friend email in dbapi: ", friendEmail);
        return axios.get(`/db/findfriendsbyemail/${friendEmail}`);
    },

    getSearchedFriendbyName: function(friendName) {
        console.log("friend name in dbapi: ", friendName);
        return axios.get(`/db/findfriendsbyname/${friendName}`);
    },

    findIfFriend: function(friend) {
        return axios.get(`/db/findiffriends/${friend}`);
    },

    followFriend: function(friendId) {
        return axios.post(`/db/followfriend/${friendId}`);
    },

    // does this work???
    getNewsfeed: function() {
        return axios.get("/db/friendactivity");
    }
}