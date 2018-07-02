const express = require('express');
const router = express.Router();
// const axios = require("axios");
const WantToWatch = require("../models/wantToWatch");

module.exports = function(router, WantToWatch){
    router.post("/db/want", function(req, res){
        // console.log("req.body.tmdbId: ", req.body.movieData.tmdbID);
        // console.log("req.session.userId: ", req.user.id);
        const addToDb = {
           tmdbID: req.body.movieData.tmdbID,
           title: req.body.movieData.title,
           UserId: req.user.id
        };
        console.log("addToDb: ", addToDb);
       WantToWatch.create(addToDb).then(function(data){
           res.json(data);
       });
    });
};