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
            // console.log(data);
            res.json(data)})
            .catch(err => { console.log(err); res.end() });
    });

    router.get("/api/findmovie/:id", (req, res) => {
        const id = req.params.id;
        console.log("id for search: ", id);
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}`)
        .then(results => {
            // console.log("movie info: ", results.data);
            res.json(results.data);
        })
        .catch(err => {console.log(err); res.end()});
    });

    router.get("/api/findtv/:id", (req, res) => {
        const id = req.params.id;
        console.log("id for search: ", id);
        axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${APIKey}`)
        .then(results => {
            // console.log("tv info: ", results.data);
            res.json(results.data);
        })
        .catch(err => {console.log(err); res.end()});
    });
}; 