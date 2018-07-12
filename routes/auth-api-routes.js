const express = require('express');
const passport = require('passport');
const User = require('../models/user');
const router = express.Router();

module.exports = function (router, passport, User) {

    router.get("/auth/check", function (req, res) {
        if (req.user) {
            res.json({ user: req.user });
        }
        else {
            res.json(false);
        };
    });

    router.get("/auth/logout", function (req, res) {
        req.session.destroy(function (err) {
            res.redirect("/");
        });
    });


    router.post("/auth/login", passport.authenticate("local-signin", { session: true }), function (req, res) {
        // req.session.userId = res.id;
        res.json(true);
    });

    router.post("/auth/register", passport.authenticate("local-signup", { session: true }), function (req, res) {
        // create user here but only if email does not already exist in db
        //spread is used instead of then when more than one argument is passed returned from a promise
        User.findOrCreate({
            where: {
                email: req.body.email
            }
        }).spread(user, created => {
            if (created) {
                // req.session.userId = res.id;
                res.json(user);
            };
        });
    });

    router.get("/auth/facebook", passport.authenticate("facebook"));

    router.get("/auth/facebook/callback", passport.authenticate("facebook", { failureRedirect: "/login" }), function (req, res) {
        res.redirect("/");
    });
    
};