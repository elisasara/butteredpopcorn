const express = require('express');
const passport = require('passport');
const User = require('../models/user');
const router = express.Router();
// const ensureLoggedIn = require("ensureLoggedIn");

module.exports = function (router, passport, User) {
    // router.post('/login', passport.authenticate('local-signin', function (req, res) {
    //     res.redirect('/');
    // }));

    // router.post("/register", passport.authenticate("local-signup", function(req, res){
    //     res.redirect("/");
    // }));

    // router.post('/login', function (req, res) {
    //     res.redirect('/');
    // });

    // router.post("/register", function(req, res){
    //     res.redirect("/");
    // });

    // router.get("/findfriends", ensureLoggedIn("/login"), function(req, res){
    //     res.render("/findfriends", {user: req.user});
    // });

    router.post('/login', passport.authenticate('local-signin', {
        successRedirect: "/",
        failureRedirect: "/login"
    }));

    router.post("/register", passport.authenticate("local-signup", {
        successRedirect: "/",
        failureRedirect: "/register"
    }));

    router.get("/findfriends", checkAuthentication, function(req, res){
        res.render("/findfriends");
    });

    function checkAuthentication (req, res, next) {
        if(req.isAuthenticated()){
            next();
        }
        else{
            res.redirect("/login");
        };
    };

    // router.get("/logout", )

    // router.get("/logout", function (req, res) {
    //     req.session.destroy(function (err) {
    //         res.redirect("/");
    //     });
    // });

    // router.post('/login', function (req, res) {
    //     res.redirect('/');
    // });

    // router.post('/register', function (req, res) {
    //     User.create(new User({ username: req.body.username }), req.body.password, function (err, user) {
    //         if (err) {
    //             return res.render('error', { error: err });
    //         }
    //         passport.authenticate('local-signup')(req, res, function () {
    //             res.redirect('/');
    //         });
    //     });
    // });

    // router.post('/register', function (req, res) {
    //     res.redirect('/');
    // });
};