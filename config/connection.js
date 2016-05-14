//dependencies
var Sequelize = require("sequelize");

var source = {
	localhost: {
		host:  'localhost',
		user: 'root',
		password: "",
		database:  "burgers_db"
	}
}
//selects which connection to use
var selectedSource = source.localhost;

var sequelize = new Sequelize(selectedSource.database, selectedSource.user, selectedSource.password, {
  	define: { timestamps: false },  //keep false
  	host:  selectedSource.host,
	dialect:  'mysql',

	  pool: {
    	max: 5,
    	min: 0,
    	idle: 10000
  },

});

// Exports the connection for other files to use
module.exports = sequelize;