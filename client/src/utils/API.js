import axios from "axios";

export default {
    getUser: function () {
        return axios.get("/auth/check");
    },

    loginUser: function (loginData) {
       return axios.post("/auth/login", loginData);
    },

    registerUser: function (registerData) {
        return axios.post("/auth/register", registerData);
    },

    logoutUser: function () {
        return axios.get("/auth/logout");
    }
};