const express = require("express");
// const path = require("path");
const passport = require("passport");
const bodyParser = require("body-parser");
const session = require("express-session");
// do i need this?
const env = require("dotenv").load();
const PORT = process.env.PORT || 3001;
const app = express();
// const LocalStrategy = require('passport-local').Strategy;
// const passportLocalSequelize = require("passport-local-sequelize");

const db = require("./models");


// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// For Passport
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());


require("./routes/auth-api-routes.js")(app, passport, db.User);
require("./routes/auth.js")(app, passport);


//load passport strategies
require("./config/passport.js")(passport, db.User);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
});