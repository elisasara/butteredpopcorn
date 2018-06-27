const express = require("express");
const path = require("path");
const passport = require("passport");
const bodyParser = require("body-parser");
const session = require("express-session");
const PORT = process.env.PORT || 3001;
const app = express();
const LocalStrategy = require('passport-local').Strategy;
// const passportLocalSequelize = require("passport-local-sequelize");

const db = require("./models");
// const apiRoutes = require("./routes/apiRoutes");

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Initialize Passport
app.use(session({ secret: "keyboard cat", resave: false, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());

// Use apiRoutes
// app.use("/api", apiRoutes);
// require("./routes/auth-api-routes")(app);
// app.use(routes);
// app.use("./routes/auth");

// passport config
const User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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