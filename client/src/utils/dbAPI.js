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

    getUserFromDb: function() {
        return axios.get("/db/user");
    },

    getSearchedFriend: function(friend) {
        console.log("friend in dbapi: ", friend);
        return axios.get(`/db/findfriends/${friend}`);
    },

    findIfFriend: function(friend) {
        return axios.get(`/db/findiffriends/${friend}`);
    },

    followFriend: function(friendId) {
        return axios.post(`/db/followfriend/${friendId}`);
    }
}