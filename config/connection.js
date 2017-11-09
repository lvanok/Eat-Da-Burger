var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'
});

// if(process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else{
//     connection = mysql.createConnection({
//         host: 'z12itfj4c1vgopf8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//         user: '	tsnb8qxdbrt5jj8o',
//         password: 'vdy392vmwfaxzl23',
//         database: 'burgers_db',
//     });
// };

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;