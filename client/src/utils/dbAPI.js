import axios from "axios";

export default {
    wantToWatch: function(movieData) {
       return axios.post("/db/want", movieData)
    }
}