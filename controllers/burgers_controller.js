var express = require("express");
var router = express.Router();

// Import model
var burger = require("../models/burger");


router.get("/", function(req, res){
  burger.selectAll(function(dbResults){
    console.log(dbResults);
    var hbarsObj = {
      burgers: dbResults
    }
    // change the following to res.render and engage handlebars
    res.render("index", hbarsObj);
  });
});

// router.post();

// router.put();


module.exports = router;
// is imported by server.js

// possible CRUD interactions:
// load the page, pulling all burgers from db
// post: create a new burger
// put: update the burger's status ("devoured")