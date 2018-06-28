const express = require('express');
const router = express.Router();
const axios = require("axios");
// const CircularJSON = require("circular-json");
require("dotenv").config();

const APIKey = process.env.TMDB_API_Key

module.exports = function (router) {
    router.get("/api/search", (req, res) => {
        console.log(APIKey);
        // console.log(req.params.search);
        // console.log(req.params.query);
        console.log({params: req.query, api_key:APIKey});
        axios.get("https://api.themoviedb.org/3/search/multi?", { params: req.query, api_key: APIKey })
            // axios.get(`https://api.themoviedb.org/3/search/multi?api_key${APIKey}&query=${req.params.search}`)
            .then(({ data: { results } }) =>
                res.json(results))
            .catch(err => res.status(422).json(err));
    });

}; 