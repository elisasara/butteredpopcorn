import axios from "axios";

export default {
    searchFor: function (search) {
        const searchTerm = search;
        return axios.get(`/api/search/${searchTerm}`);
    },

    searchMovie: function (id) {
        const movieToFind = id;
        return axios.get(`/api/findmovie/${movieToFind}`);
    },

    searchTV: function (id) {
        const tvToFind = id;
        return axios.get(`/api/findtv/${tvToFind}`);
    }
};