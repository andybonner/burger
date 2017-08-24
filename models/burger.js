var ORM = require("../config/orm");

var burger = {
  selectAll: function(callback) {
    ORM.selectAll("burgers", function(res){
      callback(res);
    });
  },
  insertOne: function(cols, vals, callback){
    ORM.insertOne("burgers", cols, vals, function(res){
      callback(res);
    })
  },
  updateOne: function(objColVals, condition, callback){
    ORM.updateOne("burgers", objColVals, condition, function(res){
      callback(res);
    })
  }
}

module.exports = burger;
// is imported by burgers_controller.js