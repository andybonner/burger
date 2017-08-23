var express = require("express");
var router = express.Router();

var burger = require("../models/burger");


router.get("/", function(req, res){
  burger.selectAll(function(dbResults){
    console.log(dbResults);
    // change to res.render
  })
});

// router.post();

// router.put();


module.exports.router = router;
// is imported by server.js

// possible CRUD interactions:
// load the page, pulling all burgers from db
// post: create a new burger
// put: update the burger's status ("devoured")