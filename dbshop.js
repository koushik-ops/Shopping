const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ishu'
});

connection.connect((err) => {
    if (err) {
        console.log("Connection failed:", err);
        return;
    }

    console.log("Connected to MySQL");

    connection.query(
        "CREATE DATABASE IF NOT EXISTS shopping2",
        (err, result) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log("Database created successfully");
            console.log(result);

            connection.end();
        }
    );
});

module.exports = connection;