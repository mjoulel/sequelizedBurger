var connection = require("./connection.js");

var orm{
	selectAll: function(tableInput, colToSearch, valOfCol){
		var queryString = "SELECT * FROM ?? WHERE ?? = ?";
		console.log(queryString);
		connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      console.log(result);
	},

	insertOne: function(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
    var queryString = "SELECT ?? FROM ?? AS tOne";
    queryString = queryString + " INSERT ONE ?? AS tTwo";
    queryString = queryString + " ON tOne.?? = tTwo.??";

    console.log(queryString);

    connection.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol], function(err, result) {
      console.log(result);
    },

    updateOne: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
   }
};

// Export the ORM object in module.exports.
model.exports = orm;	