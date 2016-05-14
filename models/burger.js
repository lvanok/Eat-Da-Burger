var connection = require('../config/orm.js');

/*
Here is where you setup a model for how to interface with the database.
*/
var Sequelize = require("sequelize");

var sequelizeConnection = require("../config/connection.js");

// Creates a "Burger" model that matches up with DB
var burger = sequelizeConnection.define("burger", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
    },
    sleepy: {
        type: Sequelize.BOOLEAN,
    }
});

// Syncs with DB
burger.sync();

// Makes the Burger Model available for other files (will also create a table)
module.exports = burger;

var burger = {
	all: function(cb) {
		orm.all('burger', function(res){
			cb(res);
		});
	},
	//cols and vals are arrays
	create: function(cols, vals, cb) {
		orm.create('burger', cols, vals, function(res){
			cb(res);
		});
	},
	update: function(objColVals, condition, cb) {
		orm.update('burger', objColVals, condition, function(res){
			cb(res);
		});
	},
	delete: function(condition, cb){
		orm.delete('burger', condition, function(res){
			cb(res);
		});
	}
};




module.exports = burger;