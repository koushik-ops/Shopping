const mysql = require("mysql2");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "#Koushik460",
    database: "shopping2",
});

connection.connect(function (err) {
    if (err) throw err;

    connection.query(
        "create table Product (pname varchar(25), category varchar(25), price int)",
        function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        }
    );
});

connection.connect(function (err) {
    if (err) throw err;

    connection.query(
        "create table Customer (cname varchar(25), address varchar(25))",
        function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        }
    );
});
