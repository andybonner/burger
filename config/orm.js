var connection = require("./connection");

var orm = {
  selectAll: function(){
    connection.query("SELECT * FROM burgers", function(err, result){
      if (err) throw err;
      return result;
    });
  },
  insertOne: function(burgerName){
    connection.query(
      "INSERT INTO burgers (burger_name, devoured) VALUE (" + burgerName + ", false)",
      function(err, result){
        if (err) throw err;
        return result;
      }
    );
  },
  updateOne: function(burgerID){
    connection.query(
      "UPDATE burgers SET devoured = 1 WHERE id = " + burgerID,
      function(err, result){
        if (err) throw err;
        return result;
      }
    );
  }
}

module.exports = orm;

// is imported by burgers.js