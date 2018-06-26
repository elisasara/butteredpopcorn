const express = require('express');
const passport = require('passport');
const User = require('../models/user');
const router = express.Router();

router.get("/auth/check", function (req, res){
    if (req.user) {
       res.json({user: req.user});
    }
    else {
        res.json(false);
    };
});

router.post("/auth/login", passport.authenticate("local"), function (req, res) {
    res.json(true);
});

router.post("/auth/register", function(req, res) {
    // create user here but only if email does not already exist in db
    //spread is used instead of then when more than one argument is passed returned from a promise
    User.findOrCreate({where: {
        email: req.body.email
    }}).spread(user, created => {
        if (created) {
            res.json(user);
        };
    });
});