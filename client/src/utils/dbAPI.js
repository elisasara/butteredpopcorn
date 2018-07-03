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
    }
}