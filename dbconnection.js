const mysql = require('mysql2');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ishu',
    database: 'shopping2',
});

connection.connect(function (err) {
    connection.query("insert into product values ('pizza','food',200),('dabeli','food',80),('noodles','food',300)", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});

connection.connect(function (err) {
    connection.query("insert into customer values ('chirag','gujrat'),('golu','up'),('amit','bihar')", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});