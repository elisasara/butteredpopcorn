import axios from "axios";

export default {
    searchFor: function (search) {
        const searchTerm = search;
        return axios.get(`/api/search/${search}`);
    }
};