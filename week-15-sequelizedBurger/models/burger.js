// Import the ORM to create functions that will interact with the database.
// var orm = require("../config/orm.js");

// Export the database functions.
// module.exports = burger;
module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burger",{
    // Giving the burger model a name of type STRING
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
    
    // all: function(cb) {
    //   orm.all("burgers", function(res) {
    //     cb(res);
    //   });
    // },
    // The variables cols and vals are arrays.
    // create: function(cols, vals, cb) {
    // orm.create("cats", cols, vals, function(res) {
    //   cb(res);
    // });
    // },
    // update: function(objColVals, condition, cb) {
    // orm.update("burgers", objColVals, condition, function(res) {
    //   cb(res);
    // });
    // },
    // delete: function(condition, cb) {
    // orm.delete("burgers", condition, function(res) {
    //   cb(res);
    // });
    // }
  });  
  return burger;

  var customer = sequelize.define("customer",{
    //customer model a name of type STRING
    name:{
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    }
  });
  return customer;
};

