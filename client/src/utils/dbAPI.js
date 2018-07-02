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
    }
}