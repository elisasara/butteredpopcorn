const express = require('express');
const router = express.Router();
const db = require("../models");
// const sequelize =require("sequelize");

module.exports = function (router) {

    // router.get("/login", function(req, res){
    //     res.end();
    // });

    router.post("/db/towatch", function (req, res) {
        // if (req.user !== undefined) {
        console.log(req.user.id);
        const addToWant = {
            tmdbID: req.body.movieData.tmdbID,
            title: req.body.movieData.title,
            type: req.body.movieData.type,
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
        // }
        // else {
        // res.redirect("/login");
        // }
    });

    router.post("/db/watching", function (req, res) {
        const addToWatching = {
            tmdbID: req.body.movieData.tmdbID,
            title: req.body.movieData.title,
            type: req.body.movieData.type,
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
        const addToWatched = {
            tmdbID: req.body.movieData.tmdbID,
            title: req.body.movieData.title,
            type: req.body.movieData.type,
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

    router.get("/db/findfriendsbyemail/:friendEmail", function (req, res) {
        console.log(req.params.friendEmail);
        db.User.findAll({
            where: {
                email: req.params.friendEmail
            }
        }).then(data => {
            res.json(data);
        });
    });

    router.get("/db/findfriendsbyname/:friendName", function (req, res) {
        console.log(req.params.friendName);
        db.User.findAll({
            where: {
                fullName: {
                    $like: `${req.params.friendName}`
                }
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

            let resultsArr = [];
            db.CurrentlyWatching.findAll({
                where: {
                    UserId: {
                        [Op.or]: idArr
                    }
                },
                include: [{
                    model: db.User
                }]
            }).then(currently => {
                resultsArr.push(currently);
                db.Watched.findAll({
                    where: {
                        UserId: {
                            [Op.or]: idArr
                        }
                    },
                    include: {
                        model: db.User
                    }
                }).then(already => {
                    resultsArr.push(already);
                    db.WantToWatch.findAll({
                        where: {
                            UserId: {
                                [Op.or]: idArr
                            }
                        },
                        include: {
                            model: db.User
                        }
                    }).then(want => {
                        resultsArr.push(want);
                        console.log(resultsArr);
                        res.json(resultsArr);
                    });
                });
            });
        });
    });
};