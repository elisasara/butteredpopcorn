const express = require('express');
const router = express.Router();
const axios = require("axios");
const db = require("./models");

module.exports = function(db, router){
    router.post("/db/want", function(req, res){
        console.log("req.body: ", req.body);
       db.WantToWatch.create(req.body).then(function(data){
           res.json(data);
       });
    });
};