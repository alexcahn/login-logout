const dotenv = require('dotenv');
dotenv.config();

const {
    DB_USER,
    DB_PASS,
    DB_NAME
} = process.env;

const mysql = require('mysql');

let config = {
    host: 'localhost',
    port: 3306,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME
};

var connection;
var host;

if (process.env.JAWSDB_URL) {
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
    host = 'JAWSDB';
} else {
    var connection = mysql.createConnection(config);
    host = 'localhost';
}

// Connect to the database
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + host);
});

// Export connection
module.exports = connection;