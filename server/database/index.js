const mysql = require('mysql');
const connection = mysql.createConnection({
  user  : 'root',
  password: "123456",
})

// Create DB
connection.query('CREATE DATABASE IF NOT EXISTS buildup', function (error, results, fields) {
  if (error) throw error;
})

// Use DB
connection.query('USE buildup', function (error, results, fields) {
  if (error) throw error;
})

// Create product table
connection.query('CREATE TABLE IF NOT EXISTS products (id INT NOT NULL AUTO_INCREMENT, productName VARCHAR(20) NOT NULL, productDescription VARCHAR(1000), productImage VARCHAR(100), PRIMARY KEY (id))', function(error) {
  if (error) throw error;
})

// Create contact table
connection.query('CREATE TABLE IF NOT EXISTS contacts (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(30), location VARCHAR(50), email VARCHAR(30), phoneNumber VARCHAR(20), productId INT, FOREIGN KEY (productId) REFERENCES products(id) ON DELETE CASCADE, PRIMARY KEY(id))', function(error, results, fields) {
  if (error) throw error;
})

module.exports = connection;