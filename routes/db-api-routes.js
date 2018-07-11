const express = require('express');
const router = express.Router();
const db = require("../models");
// const sequelize =require("sequelize");

module.exports = function (router) {
    router.post("/db/towatch", function (req, res) {
        const addToWant = {
            tmdbID: req.body.movieData.tmdbID,
            title: req.body.movieData.title,
            UserId: req.user.id
        };
        console.log("addToDb: ", addToWant);
        db.WantToWatch.create(addToWant).then(data => {
            res.json(data);
        });
        db.CurrentlyWatching.destroy({
            where: {
                tmdbID: req.body.movieData.tmdbID,
                UserId: req.user.id
            }
        }).then(deleted => console.log("Currently watching deleted"));
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
        db.WantToWatch.destroy({
            where: {
                tmdbID: req.body.movieData.tmdbID,
                UserId: req.user.id
            }
        }).then(deleted => console.log("Want to watch deleted"));
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
        db.WantToWatch.destroy({
            where: {
                tmdbID: req.body.movieData.tmdbID,
                UserId: req.user.id
            }
        }).then(wantDeleted => console.log("Want to watch deleted"));
        db.CurrentlyWatching.destroy({
            where: {
                tmdbID: req.body.movieData.tmdbID,
                UserId: req.user.id
            }
        }).then(watchingDeleted => console.log("Watching deleted"));
    });

    router.get("/db/watched", function (req, res) {
        const userId = req.user.id;
        console.log("User ID: ", userId);
        db.Watched.findAll({
            where: {
                UserId: userId
            }
        }).then(data => {
            res.json(data);
        });
    });

    router.get("/db/watching", function (req, res) {
        const userId = req.user.id;
        console.log("User ID: ", userId);
        db.CurrentlyWatching.findAll({
            where: {
                UserId: userId
            }
        }).then(data => {
            res.json(data);
        });
    });

    router.get("/db/towatch", function (req, res) {
        const userId = req.user.id;
        console.log("User ID: ", userId);
        db.WantToWatch.findAll({
            where: {
                UserId: userId
            }
        }).then(data => {
            res.json(data);
        });
    });

    router.get("/db/user", function (req, res) {
        const userId = req.user.id;
        console.log("User ID: ", userId);
        db.User.findAll({
            where: {
                id: userId
            }
        }).then(data => {
            res.json(data);
        });
    });

    router.get("/db/findfriends/:friend", function (req, res) {
        console.log(req.params.friend);
        db.User.findAll({
            where: {
                email: req.params.friend
            }
        }).then(data => {
            res.json(data);
        });
    });

    router.get("/db/findiffriends/:friend", function (req, res) {
        console.log(req.params.friend);
        db.Friends.findAll({
            where: {
                friendId: req.params.friend,
                UserId: req.user.id
            }
        }).then(data => {
            res.json(data);
        });
    });

    router.post("/db/followfriend/:friendId", function (req, res) {
        db.Friends.create({
            friendId: req.params.friendId,
            UserId: req.user.id
        }).then(data => res.json(data));
    });

    router.get("/db/friendactivity", function (req, res) {
        db.Friends.findAll({
            where: {
                UserId: req.user.id
            }
        }).then(data => {
            console.log("data: ", data);
            const Op = db.sequelize.Op;
            let idArr = [];
            data.forEach(function (friend) {
                const friendId = friend.friendId;
                idArr.push(friendId);
            });
            console.log(idArr);
            db.User.findAll({
                where: {
                    id: {
                        [Op.or]: idArr
                    }
                },
                // attributes: ["id", "firstName"],
                include: [{
                    model: db.CurrentlyWatching,
                    // attributes: ["tmdbID", "title", "createdAt"]
                },
                {
                    model: db.Watched,
                },
                {
                    model: db.WantToWatch
                }]
                // include: [{
                //     model: db.CurrentlyWatchings,
                //     where: {
                //         id: {
                //             [Op.or]: idArr
                //         }
                //     }
                // }]
            }).then(results => {
                console.log(results);
                res.json(results);
            });
        });
    });
};