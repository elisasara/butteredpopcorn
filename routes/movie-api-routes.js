const express = require('express');
const router = express.Router();
const axios = require("axios");
const CircularJSON = require("circular-json");
require("dotenv").config();

const APIKey = process.env.TMDB_API_Key

module.exports = function (router) {
    router.get("/api/search/:searchTerm", (req, res) => {
        const searchTerm = encodeURI(req.params.searchTerm);
        console.log(searchTerm);
        console.log(APIKey);
        axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${APIKey}&query=${searchTerm}`)
            // .then(({ data: { results } }) =>
            .then((results) => {
            // const data =  CircularJSON.stringify(results);
            const data = results.data.results;
            console.log(data);
            res.json(data)})
            .catch(err => { console.log(err); res.end() });
    });
}; 