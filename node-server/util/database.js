const mysql = require('mysql2');

 const pool = mysql.createPool({
     host: 'localhost',
     user: 'root',
     database: 'app',
     password: '7869'
 });

module.exports = pool.promise();




