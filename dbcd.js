const mysql = require('mysql2');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ishu',
    port: 3306,             
    database: 'shopping2'
});

// 1. Open the connection ONCE
connection.connect(function(err) {
    if (err) throw err;
    console.log("🚀 Connected to shopping2 database successfully!\n");

   
    connection.query("CREATE TABLE IF NOT EXISTS product (pname varchar(25), category varchar(25), price int)", function(err) {
        if (err) throw err;
        console.log("📦 Table 'product' verified.");

        connection.query("CREATE TABLE IF NOT EXISTS customer (cname varchar(25), address varchar(25))", function(err) {
            if (err) throw err;
            console.log("👥 Table 'customer' verified.\n");

           
            const productInsert = "INSERT INTO product VALUES ('pizza','food',200),('dabeli','food',80),('noodles','food',300)";
            connection.query(productInsert, function(err) {
                if (err) throw err;
                console.log("📥 Product data inserted.");

                const customerInsert = "INSERT INTO customer VALUES ('chirag','gujrat'),('golu','up'),('amit','bihar')";
                connection.query(customerInsert, function(err) {
                    if (err) throw err;
                    console.log("📥 Customer data inserted.\n");

                    
                    connection.query("DELETE FROM product WHERE price = 80", function(err) {
                        if (err) throw err;
                        console.log("🗑️ Deleted product where price is 80.");

                        connection.query("DELETE FROM customer WHERE cname = 'golu'", function(err) {
                            if (err) throw err;
                            console.log("🗑️ Deleted customer named 'golu'.\n");

                            
                            connection.query("SELECT pname, price FROM product", function(err, productResult) {
                                if (err) throw err;
                                console.log("--- FINAL PRODUCT COLUMNS (pname, price) ---");
                                console.log(productResult);

                                connection.query("SELECT cname FROM customer", function(err, customerResult) {
                                    if (err) throw err;
                                    console.log("\n--- FINAL CUSTOMER COLUMNS (cname) ---");
                                    console.log(customerResult);
                                    
                                    
                                    connection.end();
                                    console.log("\n🔌 Database connection closed cleanly.");
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});

module.exports = connection;