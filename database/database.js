const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'recipeapp',
    port:3306
})

module.exports = connection;