const express = require('express');
const passport = require('passport');
const User = require('../models/user');
const router = express.Router();

router.post('/login', passport.authenticate('local'), function (req, res) {
    res.redirect('/');
});

router.post('/register', function (req, res) {
    User.register(new User({ username: req.body.username }), req.body.password, function (err, user) {
        if (err) {
            return res.render('error', { error: err });
        }
        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
});
