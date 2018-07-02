const express = require('express');
const router = express.Router();
// const axios = require("axios");
const db = require("../models");

module.exports = function (router) {
    router.post("/db/towatch", function (req, res) {
        const addToWant = {
            tmdbID: req.body.movieData.tmdbID,
            title: req.body.movieData.title,
            UserId: req.user.id
        };
        console.log("addToDb: ", addToWant);
        db.WantToWatch.create(addToWant).then(data => {
            console.log("Data: ", data);
            res.json(data);
        });
        // db.CurrentlyWatching.findAll({
        //     where: {
        //         tmdbID: req.body.movieData.tmdbID,
        //         UserId: req.user.id
        //     }
        // }).then(toBeDeleted => {
        db.CurrentlyWatching.destroy({
            where: {
                tmdbID: req.body.movieData.tmdbID,
                UserId: req.user.id
            }
        }).then(deleted => console.log("This was deleted"));
    });

    router.post("/db/watching", function (req, res) {
        const addToWatching = {
            tmdbID: req.body.movieData.tmdbID,
            title: req.body.movieData.title,
            UserId: req.user.id
        };
        console.log("addToDb: ", addToWatching);
        db.CurrentlyWatching.create(addToWatching).then(data => {
            res.json(data);
        });
    });

    router.post("/db/watched", function (req, res) {
        // console.log("req.body.tmdbId: ", req.body.movieData.tmdbID);
        // console.log("req.session.userId: ", req.user.id);
        const addToWatched = {
            tmdbID: req.body.movieData.tmdbID,
            title: req.body.movieData.title,
            rating: req.body.movieData.rating,
            UserId: req.user.id
        };
        console.log("addToDb: ", addToWatched);
        db.Watched.create(addToWatched).then(data => {
            res.json(data);
        });
    });

};