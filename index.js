const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ishu'
});

connection.connect(function (err) {
    connection.query("create database shopping2", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});

module.exports = connection;