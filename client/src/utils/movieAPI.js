import axios from "axios";

export default {
    searchFor: function (search) {
        return axios.get("/api/search", { params: { query: search } });
    }
};