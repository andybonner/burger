var ORM = require("../config/orm");

var burger = {
  selectAll: function(callback) {
    ORM.selectAll(function(res){
      callback(res);
    });
  },
  insertOne: function(burgerName, callback){
    ORM.insertOne(burgerName, function(res){
      callback(res);
    })
  },
  updateOne: function(burgerID, callback){
    ORM.updateOne(burgerID, function(res){
      callback(res);
    })
  }
}

module.exports = burger;
// is imported by burgers_controller.js