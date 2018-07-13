var bCrypt = require("bcrypt-nodejs");
require("dotenv").config();

module.exports = function(passport, user) {
    var User = user;
    var LocalStrategy = require("passport-local").Strategy;
    var FacebookStrategy = require("passport-facebook").Strategy;

    // serialize
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
    
    // deserialize user 
    passport.deserializeUser(function(id, done) {
        User.findById(id).then(function(user) {
            if (user) {
                done(null, user.get());
            }
            else {
                done(user.errors, null);
            }
        });
    });

    // LOCAL SIGNUP
    passport.use("local-signup", new LocalStrategy({
        firstName: "firstName",
        lastName: "lastName",
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {
        var generateHash = function(password) {
            return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };

        User.findOne({
            where: {
                email: email
            }
        }).then(function(user) {
            if (user) {
                return done(null, false, {
                    message: "That email is already taken"
                });
            }
            else {
                var userPassword = generateHash(password);
                var data =
                    {
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        fullName: req.body.fullName,
                        email: email,
                        password: userPassword,
                    };
                User.create(data).then(function(newUser, created) {
                    if (!newUser) {
                        return done(null, false);
                    }
                    if (newUser) {
                        return done(null, newUser);
                    }
                });
            }
        });
    }));

    passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: "http://localhost:3001/auth/facebook/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
        User.findOrCreate({facebookId: profile.id}, {firstName: profile.displayName, email: profile.emails[0]}, function(err, user){
            return cb(err, user);
        });
    }
))

    // LOCAL SIGNIN
    passport.use("local-signin", new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {
        var User = user;
        var isValidPassword = function(userpass, password) {
            return bCrypt.compareSync(password, userpass);
        };

        User.findOne({
            where: {
                email: email
            }
        }).then(function(user) {
            if (!user) {
                return done(null, false, {
                    message: "Email does not exist"
                });
            }
            if (!isValidPassword(user.password, password)) {
                return done(null, false, {
                    message: "Incorrect password."
                });
            }
            var userInfo = user.get();
            return done(null, userInfo);
        }).catch(function(err) {
            console.log("Error:", err);
            return done(null, false, {
                message: "Something went wrong with your Signin"
            });
        });
    }));
};